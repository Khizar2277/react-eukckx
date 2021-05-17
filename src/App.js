import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
//Import Components Here

function App() {
  //Define JavaScript Here
  const [advice, setAdvice] = useState([]);

  const Fetch = () => {
    axios.get('https://api.adviceslip.com/advice').then(response => {
      setAdvice(quote => response.data.slip);
      console.log(advice);
    });
  };

  useEffect(() => {
    Fetch();
  }, []);
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice.advice}</h1>
        <button className="button" onClick={Fetch}>
          <span>Get a Quote</span>
        </button>
      </div>
    </div>
  );
}

export default App;
