import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Saludo from './Saludo'
import './App.css'
import Saioa from './Saioa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Saludo />
    <Saioa />

     
    </>
  )
}

export default App
