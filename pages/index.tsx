import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { increment, decrement, incrementByAmount } from "./redux/counterSlice";

type ResponseValue = {
  sumValue: number;
};

const Home: NextPage = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const addAsync = async () => {
    const res = await fetch("/api/sum");
    const { sumValue }: ResponseValue = await res.json();
    dispatch(incrementByAmount(sumValue));
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={addAsync}>add asynchronously</button>
    </>
  );
};

export default Home;
