import { useState } from 'react'
import './App.css'

function App() {


  //hooks:
  let [counter, setCounter] = useState(0) //counter=variable,setCounter=function to update that variable


  const increaseValue = () => {
    setCounter(counter + 1)
  }

  const decreaseValue = () => {
    if(counter>0){setCounter(counter - 1)}
    
  }


  return (
    <>
      <h1>COUNTER</h1>
      <br />
      <h2>Counter Value : {counter}</h2>
      <button onClick={increaseValue}>Increase Value</button>

      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
