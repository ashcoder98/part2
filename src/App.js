import { uuid } from 'uuidv4';

const Header = ({name}) => {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}
const Total = ({total}) => {
    return (
        <div>
            <h1>{total}</h1>
        </div>
    )
}
const Part = ({exercise, name}) => {

    return (
        <div>
            
        <li style={{
            listStyleType: "none"
        }}>{name} {exercise}</li>
        </div>
    )
}

const Content = ({courses}) => {
    const intialValue = 0;
    let exercisestotal = courses.map(element => {
        let totalArray = element.parts.reduce((a, b) => {
            console.log(element.parts, b.exercises, a)
            return a + b.exercises
    
        }, intialValue)
        return totalArray
    });
    let finalArray = exercisestotal.map((element) => {
        
        let obj = {val: element};
            
        return obj;
    })
    console.log(finalArray)

    return (
        <div>

            <ul>
            {courses.flatMap((part) => [<Header key={part.id} name={part.name}/>, part.parts.map((localparts) => <Part key={localparts.id} exercise={localparts.exercises} name={localparts.name}/>),<Total key={uuid} total={exercisestotal}/>])}

            </ul>
         
        </div>
    )}

const Course = ({courses}) => {
    return (
        <div>
            <Content courses={courses}/>
        </div>
    )
}

const App = () => {
    const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
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
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]

    return <Course courses={courses}/>
}

export default App