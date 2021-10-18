import React from 'react'

const Course = (props) => {
  return (
    <div>
      <Header name={props.course.name} />
      <Content
        part1={props.course.parts[0]}
        part2={props.course.parts[1]}
        part3={props.course.parts[2]}
      />
      {/* <Total
        sum={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      /> */}
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <p>2.1</p>
      <h1>{props.name}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1.name} exercises={props.part1.exercises} />
      <Part part={props.part2.name} exercises={props.part2.exercises} />
      <Part part={props.part3.name} exercises={props.part3.exercises} />
    </div>
  )
}

// const Total = (props) => {
//   return <div>Number of exercises: {props.sum}</div>
// }
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  }

  return (
    <>
      <Course course={course} />
    </>
  )
}

export default App
