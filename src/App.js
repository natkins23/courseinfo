import React from 'react'

const Part = (props) => {
  
  return (
    <div>
<p>{props.part} {props.exercises}</p>
</div>
  )
}

const Header = (props) => {
  
  return (
    <>
  <p>1.4</p>
<h1>{props.course}</h1>
</>
  )
}
const Content = (props) => {
  
  return (
<div>
  <Part part = {props.part1.name}  exercises = {props.part1.exercises} />
  <Part part = {props.part2.name}  exercises = {props.part2.exercises} />
  <Part part = {props.part3.name}  exercises = {props.part3.exercises} />
  </div>
  )
}

const Total = (props) => {
  
  return (
<div>Number of exercises: {props.sum}</div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
     <Header course = {course}/>
     <Content part1 = {parts[0]} part2 = {parts[1]} part3 = {parts[2]} />
     <Total sum = {parts[0].exercises+parts[1].exercises+parts[2].exercises}/>
    </div>
  )
}

export default App