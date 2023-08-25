const Header = (props) => {
  console.log(props);
  return <h1>{props.text}</h1>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ obj1, obj2, obj3 }) => {
  console.log(obj1);
  return (
    <div>
      <Part name={obj1.name} exercises={obj1.exercises} />
      <Part name={obj2.name} exercises={obj2.exercises} />
      <Part name={obj3.name} exercises={obj3.exercises} />
    </div>
  );
};

// const Total = (props) => {
//   console.log(props);
//   return <p>Number of exercises {props.total}</p>;
// };

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header text="Half stack application dev" />
      <Content obj1={parts[0]} obj2={parts[1]} obj3={parts[2]} />
      {/* <Total total={totalExercises} /> */}
    </div>
  );
};

export default App;
