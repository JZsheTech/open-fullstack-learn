import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // 当前选中的名言索引
  const [selected, setSelected] = useState(0)

  // 初始化投票数组，长度与名言数量相同，全为0
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  // 随机选择一个名言
  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  // 给当前名言投票
  const handleVote = () => {
    const copy = [...votes]         // 必须复制数组（不能直接修改 state）
    copy[selected] += 1
    setVotes(copy)
  }

  // 找出票数最多的名言索引
  const maxVotes = Math.max(...votes)
  const topIndex = votes.indexOf(maxVotes)

  return (
    <div style={{ fontFamily: 'sans-serif', margin: '2em' }}>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[topIndex]}</p>
      <p>has {votes[topIndex]} votes</p>
    </div>
  )
}

export default App
