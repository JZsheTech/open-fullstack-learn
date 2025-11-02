import { useState } from 'react'


const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}

      <p>{allClicks.join(' ')}</p>
    </div>
  )
}
export default App

// 调用一个改变状态的函数会导致组件重新渲染。
// 绑定的button中不能直接写 setCounter(0) , 会导致组件渲染时就执行函数，然后又进入下一次渲染，又执行函数，产生死循环。
// 绑定的button中(on事件处理函数)，需要函数引用，而不是函数调用
// 调用一个改变状态的函数会导致组件重新渲染。