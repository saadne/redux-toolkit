import React, { useState } from "react";
import { increment, decrement, incrementByAmount, reset } from "./CounterSlice";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  const addValue = Number(amount) || 0;

  const resetAll = () => {
    dispatch(reset());
    setAmount(0);
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={resetAll}>Reset</button>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
      </div>
    </section>
  );
}

export default Counter;
