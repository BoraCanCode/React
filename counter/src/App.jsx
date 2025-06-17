import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);

  const increase = () => {
    if (counter <= 20) {
      setCounter(counter++);
    }
  }

  const decrease = () => {
    if (counter >= 0) {
      setCounter(counter--);
    }
  }

  return (
    <>

      <h1> Chai aur React </h1>

      <h3>Counter Value  = {counter}</h3>

      <button onClick={increase}>Increase Counter</button>
      <br />
      <button onClick={decrease}>Remove Counter</button>


    </>
  )
}

export default App
