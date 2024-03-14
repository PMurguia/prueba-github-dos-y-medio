import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Saludo from './Saludo'
import Jondenis from './jondenis'
import Saludo from "./Saludo";
import "./App.css";
import Angie from "./angie";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Saludo />
      <Jondenis/>
      <Angie />
    </>
  );
}

export default App;
