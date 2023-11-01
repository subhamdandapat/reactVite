import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { decrement, increment } from "../features/counterSlice";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};
export default Counter;
