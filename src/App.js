import { useState } from "react";

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
  const incrementStep = () => setStep((s) => s + 1);
  const decrementStep = () => setStep((s) => s - 1);
  const incrementCount = () => setCount((s) => s + step);
  const decrementCount = () => setCount((s) => s - step);

  return (
    <div>
      <Buttons
        text="step"
        decrement={decrementStep}
        increment={incrementStep}
        variableToShow={step}
      />
      <Buttons
        text="count"
        decrement={decrementCount}
        increment={incrementCount}
        variableToShow={count}
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

export default App;

const Buttons = ({ text, decrement, increment, variableToShow }) => {
  return (
    <div>
      <button onClick={() => decrement()}>-</button>
      <span>
        {text}
        {variableToShow}
      </span>
      <button onClick={() => increment()}>+</button>
    </div>
  );
};
