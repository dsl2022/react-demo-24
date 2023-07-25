import { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

function handleMagic(message){
  console.log("magic is cool",message)
}

function MyButton({name,disabled,message}){
  return <div>
    <button onClick={handleMagic(message)} disabled={disabled}>{name}</button>
  </div>
}


function App() {
  return (    
    <div className="App">
      <h1>React is cool</h1>
      <MyButton name="Magic" disabled={false} message="test" />
      <MyButton name="Dark Magic" disabled={true} message="test" />
      <img src="https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg" />
    </div>
    
  );
}

export default App;
