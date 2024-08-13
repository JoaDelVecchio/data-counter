import "./index.css";
import { useState } from "react";

export default App;

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="app">
        <Counter
          step={step}
          setStep={setStep}
          count={count}
          setCount={setCount}
        />
        <Message count={count} />
        <ResetBtn count={count} setCount={setCount} setStep={setStep} />
      </div>
      <div>
        <footer>Joaquin Del Vecchio</footer>
      </div>
    </div>
  );
}

const Counter = ({ step, setStep, count, setCount }) => {
  const incrementCount = () => setCount((s) => s + step);
  const decrementCount = () => setCount((s) => s - step);

  return (
    <div className="counter">
      <StepsBar step={step} setStep={setStep} />
      <CounterBar
        decrement={decrementCount}
        increment={incrementCount}
        counter={count}
        setCount={setCount}
      />
    </div>
  );
};

const Message = ({ count }) => {
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <p className="message">
      {count === 0
        ? "Today is"
        : count > 0
        ? `${count} days from today is`
        : `${Math.abs(count)} days ago was`}{" "}
      {date.toDateString()}
    </p>
  );
};

const CounterBar = ({ decrement, increment, counter, setCount }) => {
  const handleCounter = (e) => {
    setCount(Number(e.target.value));
  };
  return (
    <div className="counterBar">
      <button onClick={decrement}>-</button>
      <input type="number" value={counter} onChange={handleCounter} />
      <button onClick={increment}>+</button>
    </div>
  );
};

const StepsBar = ({ step, setStep }) => {
  const handleStep = (e) => {
    setStep(Number(e.target.value));
  };
  return (
    <div className="stepBar">
      0
      <input type="range" min="0" max="10" value={step} onChange={handleStep} />
      10 ({step})
    </div>
  );
};

const ResetBtn = ({ count, setCount, setStep }) => {
  const handleReset = () => {
    setCount(0);
    setStep(1);
  };
  if (count !== 0)
    return (
      <button className="resetBtn" onClick={handleReset}>
        Reset
      </button>
    );
};
