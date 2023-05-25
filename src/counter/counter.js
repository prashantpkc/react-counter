import React, { useState } from 'react';
import './counter.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className = "parent">
      <h2>Increment and Decrement</h2>
      <h3>Counter: {count}</h3>

      <button onClick={handleIncrease} className = "increment">increment</button>
      <button onClick={handleDecrease} className= "decrement">decrement</button>
    </div>
  );
};
export default Counter;
