import React from 'react'
import Course from './components/Course'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  return (
    <>
      <p>2.5</p>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  )
}

export default App

/* 2.5 module steps
1) created a comonents folder inside of the src folder
2) created a Course.js folder inside the components folder
3) Copied the course component and all sub components including Header,Content, as well as Contents subcomponent of Part int the Course component folder
4) imported react into the Course.js file
5) exported as default the Course component


*/

/* 2.4 steps and notes
1) just need to map through the courses array and return a course component that takes a course and a key
*/

/* 2.2 / 2.3 steps and notes
1) had to clean up every component by DESTRUCTURING the props, this makes it a lot easier to know what the props actually are
2) I then had to use higher order functions (MAP) to account for additions of new parts to the course, which would affect the sum of all courses.
--- my map function returns a <Part/> component that recieves 2 props, the name and exercises of each part
3) I use this similar process to create an array of all the all the exercises in each part, and then reduce that array to get the sum of the parts, I could also just use a sum function as well.
4) I remove the total component as each content would have a total and so it would not be a reusable component
5) I also had to create a key for each part which was had its own id and so i linked the id the part as its key to avoid the react error

*/
