import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function App () {
  
  const [timer, setTimer] = useState(0);
  const [minute, setMinute] = useState(0);
  const [intervalId, setIntervalId] =  useState(null);
  const [startButton, setStartButton] = useState(true);
  const [pauseButton, setPauseButton] = useState(false);
  const [resetButton, setResetButton] = useState(false);

  let handleStart = (e) => { 
    
    const tempId = setInterval(() => {
      setTimer(prevTimer => prevTimer+1); 
    }, 1000);
    setIntervalId(tempId);
    setStartButton(false);
    setPauseButton(true);
    setResetButton(true);
  }

  let handlePause= (e) => {
    clearInterval(intervalId);
    setStartButton(true);
    setPauseButton(false);
    setResetButton(true);
   }

  let handleReset= (e) => {
    clearInterval(intervalId);
    setTimer(0);
    setStartButton(true);
    setPauseButton(false);
    setResetButton(false);
  }


  useEffect( ()=> {

    if(timer%60===0&&timer>1)
    {
      setMinute(minute+1);
      setTimer(0);
    }

  });

  return (
    <div className="App">
      <h1>Counter</h1>
      <span>
        {minute}
      </span>
      <span> min </span>
      <span >
        {timer}
      </span>
      <span> sec</span>
      <div className="Buttons">
        <button id="start" disabled={!startButton} onClick={handleStart}>
          Start
        </button>
        <button id="pause" disabled={!pauseButton} onClick={handlePause}>
          Pause
        </button>
        <button id="reset" disabled={!resetButton} onClick={handleReset}>
          Reset
        </button>
      </div>      
    </div>
  );
  
  
}


export default App;