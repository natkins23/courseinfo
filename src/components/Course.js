import React from 'react'

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

const Header = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

const Content = ({ parts }) => {
  const ArrExerciseCount = parts.map((part) => part.exercises)
  const totalExercises = ArrExerciseCount.reduce((sum, total) => {
    return sum + total
  }, 0)

  return (
    <div>
      {parts.map((part) => {
        return (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        )
      })}
      <div>
        <b>total of {totalExercises} exercises</b>
      </div>
    </div>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  )
}

export default Course
