import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Saludo from './Saludo'
import './App.css'
import Jondenis from './jondenis'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Saludo />
      <Jondenis/>
    </>
  )
}

export default App
