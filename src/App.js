// import logo from './logo.svg';
import React from "react";
import { useState } from 'react';
import data from './data.js'
import Tours from './components/Tours.js';
import Footer  from "./components/Footer.js";
import './App.css';

function App() {




  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter( tour => tour.id !==id);
    setTours(newTours);
  }

  

  if(tours.length===0)
    {
      return (
        <div className="refresh">
          
          <h1>No tours left </h1>
          <button className="btn-white" onClick={()=> setTours(data)}>Refresh</button>

        </div>
      );
    } 



  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}>  </Tours>
      <Footer/>
    </div>
  );
}

export default App;
