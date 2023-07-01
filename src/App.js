
import './App.css';
import React from 'react';
import{Header} from './Components/Header';
import{AddTask} from './Components/AddTask';
import{ShowTask} from './Components/ShowTask';


function App() {
  return (
    <div className="App">
      <Header/>
      <AddTask/>
      <ShowTask/>
    </div>
  );
}

export default App;
