const Header = (props) => {
  console.log(props);
  return <h1>{props.text}</h1>;
};

const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part name={props.part1.name} exercises={props.part1.exercises} />
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} />
    </div>
  );
};

// const Total = (props) => {
//   console.log(props);
//   return <p>Number of exercises {props.total}</p>;
// };

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  //const totalExercises = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header text="Half stack application dev" />
      <Content part1={part1} part2={part2} part3={part3} />
      {/* <Total total={totalExercises} /> */}
    </div>
  );
};

export default App;