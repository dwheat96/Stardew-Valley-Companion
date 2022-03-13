import './App.css';
import React from 'react';
// import React, {useState} from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header'
import CraftsRoom from './CraftsRoom';
// import Pantry from './Pantry';




function App() {
// const [todos, setTodos] = useState([]);

    return(   
      <div> 
        <Header />
        <CraftsRoom />
      </div>
  )
}


export default App;
