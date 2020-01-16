import React, {useState} from 'react';
import './App.css';

function App () {
  
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] =  useState(null);
  const [isStartBtnEnabled, setStartButton] = useState(true);
  const [isPauseBtnEnabled, setPauseButton] = useState(false);
  const [isResetBtnEnabled, setResetButton] = useState(false);

  let handleStart = (e) => { 
    const tempId = setInterval(() => {
      setTimer(prevTimer => prevTimer+1); 
    }, 100);
    setIntervalId(tempId);
    setStartButton(false);
    setPauseButton(true);
    setResetButton(true);
  }

  let handlePause = (e) => {
    clearInterval(intervalId);
    setStartButton(true);
    setPauseButton(false);
    setResetButton(true);
   }

  let handleReset = (e) => {
    clearInterval(intervalId);
    setTimer(0);
    setStartButton(true);
    setPauseButton(false);
    setResetButton(false);
  }

  let buttons= () => {
    return (
      <div className="Buttons">
        <button id="start" disabled={!isStartBtnEnabled} onClick={(e)=>handleStart(e)}>
          Start
        </button>
        <button id="pause" disabled={!isPauseBtnEnabled} onClick={(e)=>handlePause(e)}>
          Pause
        </button>
        <button id="reset" disabled={!isResetBtnEnabled} onClick={(e)=>handleReset(e)}>
          Reset
        </button> 
      </div> 
    );
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <span>{Math.floor(timer/60)}</span>
      <span> min </span>
      <span>{timer%60}</span>
      <span> sec</span>
      {buttons()}    
    </div>
  );
}

export default App;