import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function handleMagic(message,setMagic){
  setMagic(message)
  // console.log("magic is cool",message)
}

function MyButton({name,disabled,message,setMagic}){
  return <div>
    <button onClick={()=>handleMagic(message,setMagic)} disabled={disabled}>{name}</button>
  </div>
}


function App() {
  const [magic, setMagic] =useState("magic")
  console.log("state test",magic)
  return (    
    <div className="App">
      <h1>React is cool</h1>
      <MyButton name="Magic" disabled={false} message="light magic" setMagic={setMagic} />
      {/* <MyButton name="Dark Magic" disabled={true} message="test" setMagic={setMagic}/> */}
      <img src="https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg" />
    </div>
    
  );
}

export default App;
