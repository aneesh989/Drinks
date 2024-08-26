import React from 'react';
import NavBar from './Component/NavBar';
import SectionOne from './Component/SectionOne';
import SectionTwo from './Component/SectionTwo';
import SectionThree from './Component/SectionThree';
import "./Component/Drink.css";

function App() {

  return (
    <div id="main">
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default App;
