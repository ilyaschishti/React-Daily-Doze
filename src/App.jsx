import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  const addValue= ()=>{
    if(count<20)
    {
      setCount(count+1)
      console.log(setCount)
    }
  }
  const decreaseValue= ()=>{
    if(count>0){
    setCount(count-1)
    }
  }

  return (
    <>
     <h1>Complete Concept of UseState Hook </h1>
     <button onClick={addValue} >Add value </button>
     <br />
     <br />

     <button onClick={decreaseValue} >Decrease Value</button>
     <br />
     <br />
     <p>{count}</p>
    </>
  )
}

export default App
