import React, {useState} from 'react'
import './App.css';
import ChildComponent from './components/ChildComponent'

function App() {
  const [userName, setUserName] = useState('User...');
  return (
    <div className="App">
      <h1>Hello {userName} </h1>
      <ChildComponent onChange ={value=>setUserName(value)}/>
    </div>
  );
}

export default App;
