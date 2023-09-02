import { useState } from "react";
import "./App.css";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};
// const StatisticLine = ({ text, value }) => {
//   return (
//     <div>
//       {text}:{value}
//     </div>
//   );
// };

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

// const Statistics = ({ good, neutral, bad, total, score }) => {
//   if (total === 0) {
//     return <div>No feedback given</div>;
//   } else {
//     return (
//       <div>
//         <h2>Statistics</h2>
//         <table>
//           <tbody>
//             <StatisticLine text="Good" value={good} />
//             <StatisticLine text="Neutral" value={neutral} />
//             <StatisticLine text="Bad" value={bad} />
//             <StatisticLine text="Total" value={total} />
//             <StatisticLine text="Average" value={score / total} />
//             <StatisticLine text="Positive" value={`${(good / total) * 100} %`} />
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// };
const Statistics = ({ good, neutral, bad, total, score }) => {
  if (total === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="Total" value={total} />
            <StatisticLine text="Average" value={score / total} />
            <StatisticLine
              text="Positive"
              value={`${(good / total) * 100} %`}
            />
          </tbody>
        </table>
      </div>
    );
  }
};

// const Statistics = ({ good, neutral, bad, total, score }) => {
//   if (total === 0) {
//     return <div>No feedback given</div>;
//   } else {
//     return (
//       <div>
//         <h2>Statistics</h2>
//         <StatisticLine text="Good" value={good} />
//         <StatisticLine text="Neutral" value={neutral} />
//         <StatisticLine text="Bad" value={bad} />
//         <StatisticLine text="Total" value={total} />
//         <StatisticLine text="Average" value={score / total} />
//         <StatisticLine text="Positive" value={`${(good / total) * 100} %`} />
//       </div>
//     );
//   }
// };

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
        handleClick={() =>
          setGood(good + 1, setTotal(total + 1), setScore(score + 1))
        }
        text="Good"
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

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        score={score}
      />
    </div>
  );
};

export default App;
