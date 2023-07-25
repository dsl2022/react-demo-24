import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] =useState(0)
  const increaseCount=()=>{
    setCount(count+1)
  }
  
  const decreaseCount=()=>{
    setCount(count-1)
  }
  return (    
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increaseCount} >+</button>
      <button onClick={decreaseCount} >-</button>
      
    </div>
    
  );
}

export default App;
