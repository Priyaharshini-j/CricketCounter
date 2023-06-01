import React, { useState } from "react";
import "./CounterButton.css";
function CounterButton() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <div className="count-holder">
        <h3>{count}</h3>
      </div>
      <div className="button-container">
        <button className="increment" onClick={handleIncrement}>
          Increment
        </button>
        <button className="decrement" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterButton;
