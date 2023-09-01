import { useState } from "react";
import "./App.css";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button
        text="Good"
        handleClick={() =>
          setGood(good + 1, setTotal(total + 1), setScore(score + 1))
        }
      />
      <Button
        text="Neutral"
        handleClick={() => setNeutral(neutral + 1, setTotal(total + 1))}
      />
      <Button
        text="Bad"
        handleClick={() =>
          setBad(bad + 1, setTotal(total + 1), setScore(score - 1))
        }
      />

      <h2>Statistics</h2>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total:{total}</div>
      <div>Average:{score / total}</div>
      <div>Positive:{good / total}</div>
    </div>
  );
};

export default App;
