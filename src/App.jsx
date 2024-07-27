import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Card from './components/Card';
import Azkar from './components/AzkarData';
import './App.css';
import './transitions.css';

function App() {
  const [activeCard, setActiveCard] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  const handleCardClick = (time) => {
    setActiveCard(true);
    setCurrentCard(time);
    console.log(`Card has been clicked: ${time}`);
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Zain:wght@200;300;400;700;800;900&display=swap" rel="stylesheet"/>
      <CSSTransition
        in={activeCard}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div>
          <div className='returnContainer'>
              <p className='returnBtn' onClick={() => setActiveCard(false)}>الرجوع</p>
          </div>
          <Azkar time={currentCard} />
        </div>
      </CSSTransition>
      <CSSTransition
        in={!activeCard}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className='cardContainer'>
          <Card title={'أذكار الصباح'} onClick={() => handleCardClick('m')} />
          <Card title={'أذكار المساء'} onClick={() => handleCardClick('e')} />
        </div>
      </CSSTransition>
    </>
  );
}

export default App;
