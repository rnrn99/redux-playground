import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { increment, decrement, addAsync } from "./redux/counterSlice";

const Home: NextPage = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(addAsync())}>add asynchronously</button>
    </>
  );
};

export default Home;
