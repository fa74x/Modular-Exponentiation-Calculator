import React, { useState, useEffect, useCallback } from 'react';
import Darkmode from "./images/darkmode.png"
import Lightmode from "./images/lightmode.png"

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const applyDarkModeClass = useCallback(() => {
    if (isDarkMode) {
        var lmbutton = document.getElementById('dm');
        if (lmbutton) {
            lmbutton.id = 'dm-on';
        }
      document.getElementById('root').classList.add('darkmode-bg');
      document.getElementById('root').classList.remove('lightmode-bg');
      document.getElementById('form').classList.add('darkmode');
      document.getElementById('form').classList.remove('lightmode');
      document.getElementById('modtext').classList.add('darkmode');
      document.getElementById('equals').classList.add('darkmode');
    } else {
        var dmbutton = document.getElementById('dm-on');
        if (dmbutton) {
            dmbutton.id = 'dm';
        }
      document.getElementById('root').classList.add('lightmode-bg');
      document.getElementById('root').classList.remove('darkmode-bg');
      document.getElementById('form').classList.add('lightmode');
      document.getElementById('form').classList.remove('darkmode');
      document.getElementById('modtext').classList.remove('darkmode');
      document.getElementById('equals').classList.remove('darkmode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    applyDarkModeClass();
  }, [applyDarkModeClass]);

  return (
    <button 
      id='dm-button'
      onClick={toggleDarkMode}
    >
        <img src={Lightmode} id='lm' alt='lightmode button'></img>
        <img src={Darkmode} id='dm' alt='lightmode button'></img>
    </button>
  );
};

export default DarkModeButton;