import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1)
  };

  const decreaseValue = () => {
    setCounter(counter - 1)
  
  }

  return (
    <div>
    
    <h1>Counter Value: {counter} </h1>  
    <button onClick= {addValue}> + </button>
    <button onClick= {decreaseValue}> - </button>
    
    </div>
  )
}

export default App
