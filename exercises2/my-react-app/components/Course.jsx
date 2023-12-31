import React from "react";
const Course = ({ course }) => (
  <div>
    <h1>{course.name}</h1>
    <ul>
      {course.parts.map((part) => (
        <li key={part.id}>
          {part.name} - {part.exercises} exercises
        </li>
      ))}
    </ul>
  </div>
);

export default Course;
