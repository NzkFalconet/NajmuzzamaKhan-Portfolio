import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home-Component/Home';
import MyProject from './components/Projects/Projects';
import Experiences from './components/Experience/Experiences';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`app`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Home isDarkMode={isDarkMode} />
      <Experiences  isDarkMode={isDarkMode} />
      <MyProject  isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
