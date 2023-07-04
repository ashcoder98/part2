
const Header = ({name}) => {
    return (
        <div>
            <h1>{name}</h1>
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
    return (
        <div>

            <ul>
            {courses.flatMap((part) => [<Header key={part.id} name={part.name}/>, part.parts.map((localparts) => <Part key={localparts.id} exercise={localparts.exercises} name={localparts.name}/>), <h2>Total of {part.parts.reduce((a,b) => {return a + b.exercises}, 0)} exercises</h2>])}

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
export default Course;