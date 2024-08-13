import { useState } from "react";
export default App;

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  return (
    <div>
      <Counter
        step={step}
        setStep={setStep}
        count={count}
        setCount={setCount}
      />
      <Message count={count} />
    </div>
  );
}

const Counter = ({ step, setStep, count, setCount }) => {
  const incrementCount = () => setCount((s) => s + step);
  const decrementCount = () => setCount((s) => s - step);

  return (
    <div>
      <StepsBar step={step} setStep={setStep} />
      <CounterBar
        decrement={decrementCount}
        increment={incrementCount}
        variableToShow={count}
        setCount={setCount}
      />
    </div>
  );
};

const Message = ({ count }) => {
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <p>
      {count === 0
        ? "today is"
        : count > 0
        ? `${count} days from today is`
        : `${Math.abs(count)} days ago was`}{" "}
      {date.toDateString()}
    </p>
  );
};

const CounterBar = ({ text, decrement, increment, counter, setCount }) => {
  const handleCounter = (e) => {
    setCount(Number(e.target.value));
  };
  return (
    <div>
      <button onClick={() => decrement()}>-</button>
      <span>
        <input type="number" value={counter} onChange={handleCounter} />
      </span>
      <button onClick={() => increment()}>+</button>
    </div>
  );
};

const StepsBar = ({ step, setStep }) => {
  const handleStep = (e) => {
    setStep(Number(e.target.value));
  };
  return (
    <div>
      <div>
        0
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={handleStep}
        />
        10 ({step})
      </div>
    </div>
  );
};
