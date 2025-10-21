import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
    setCounter(counter + 1)
  }

  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>
        plus
      </button>
      <button onClick={setToZero}> 
        zero
      </button>
    </div>
  )

}
export default App

// 组件状态每次改变(setCounter) , 每次都会重新渲染 App ，从而再次触发 setTimeout ，形成循环。
// 绑定的button中不能直接写 setCounter(0) , 会导致组件渲染时就执行函数，然后又进入下一次渲染，又执行函数，产生死循环。