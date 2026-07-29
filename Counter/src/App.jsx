import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Counter App</h1>

        <h2 className="counter">{counter}</h2>

        <div className="button-group">
          <button className="btn decrease" onClick={handleDecrement}>
            -
          </button>

          <button className="btn increase" onClick={handleIncrement}>
            +
          </button>
        </div>

        <button className="reset-btn" onClick={handleReset}>
          Reset Counter
        </button>
      </div>
    </div>
  );
};

export default App;