import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )


  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}

export default App

// 组件状态每次改变(setCounter) , 每次都会重新渲染 App ，从而再次触发 setTimeout ，形成循环。