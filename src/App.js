const Header = ({ header }) => {
  return(
    <h1>{header}</h1>
  )
}
const Part = ({ exercise, name }) => {
  return(
    <li style={{ listStyleType: "none"}} >{name} {exercise}</li>
  )
}

const Content = ({ course }) => {
  return(
    <ul>
      {course.map(part => <Part key={part.id} exercise={part.exercises} name={part.name}/>)}
    </ul>
  )
}


const Course = ({ course }) => {
  return(
    <div>
    <Header header={course.name} />
    <Content course={course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App