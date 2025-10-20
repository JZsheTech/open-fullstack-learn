const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part = 'Fundamentals of React'
  const exercises = 10

  return (
    <div>
      <Header course={course} />
      <h1>{course}</h1>
      <Content part={part} exercises={exercises} />
      <Total total={exercises} />
    </div>
  )
}

export default App
