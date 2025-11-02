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

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [value, setValue] = useState(10)


  const setToValue = (newValue) => () => {
    console.log('value now', newValue)  // print the new value to console
    setValue(newValue)
  }

  return (
    <div>
      {value}

      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )
}
export default App

// 调用一个改变状态的函数会导致组件重新渲染。
// 绑定的button中不能直接写 setCounter(0) , 会导致组件渲染时就执行函数，然后又进入下一次渲染，又执行函数，产生死循环。
// 绑定的button中(on事件处理函数)，需要函数引用，而不是函数调用
// 调用一个改变状态的函数会导致组件重新渲染。