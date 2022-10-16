import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {Orginals,Action}from './urls.js'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={Orginals} title="Netflix Orginals"/>
      <RowPost url={Action} title="Action" isSmall={true}/>
    </div>
  );
}

export default App;
