import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learn ReduxTookit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
