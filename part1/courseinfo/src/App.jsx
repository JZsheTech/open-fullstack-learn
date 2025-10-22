import { useState } from 'react'


const Display = (props) => {
  return (
    <div>{props.counter}</div>
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
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => {
    console.log('clicked')
    setCounter(counter + 1)
  }
  const decreaseByOne = () => setCounter(counter - 1)

  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />
      <Button
        onClick={decreaseByOne}
        text='minus'
      />
    </div>
  )

}
export default App

// 调用一个改变状态的函数会导致组件重新渲染。
// 绑定的button中不能直接写 setCounter(0) , 会导致组件渲染时就执行函数，然后又进入下一次渲染，又执行函数，产生死循环。
// 绑定的button中(on事件处理函数)，需要函数引用，而不是函数调用
// 调用一个改变状态的函数会导致组件重新渲染。