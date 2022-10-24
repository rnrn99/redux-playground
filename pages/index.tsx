import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { increment, decrement } from "./redux/counterSlice";

const Home: NextPage = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};

export default Home;
