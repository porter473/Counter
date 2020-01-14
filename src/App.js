import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0, 
      intervalId: null, 
      isStartBtnEnabled: true, 
      isPauseBtnEnabled: false, 
      isResetBtnEnabled: false
    };
  }
 
  handleStart= (e) => { 
    this.setState({
      intervalId: setInterval( ()=>{
          this.setState({timer: this.state.timer+1});
      },100) 
    }) 
    this.setState({isStartBtnEnabled: false, isPauseBtnEnabled: true, isResetBtnEnabled: true}) 
  }

  handlePause= (e) => {
    clearInterval(this.state.intervalId);
    this.setState({isStartBtnEnabled: true, isPauseBtnEnabled: false, isResetBtnEnabled: true})
  }

  handleReset= (e) => {
    clearInterval(this.state.intervalId);
    this.setState({timer: 0,isStartBtnEnabled: true, isPauseBtnEnabled: false, isResetBtnEnabled: false});
  }

  buttons= () => {
    return (
      <div className="Buttons">
        <button id="start" disabled={!this.state.isStartBtnEnabled} onClick={(e)=>this.handleStart(e)}>
          Start
        </button>
        <button id="pause" disabled={!this.state.isPauseBtnEnabled} onClick={(e)=>this.handlePause(e)}>
          Pause
        </button>
        <button id="reset" disabled={!this.state.isResetBtnEnabled} onClick={(e)=>this.handleReset(e)}>
          Reset
        </button> 
      </div> 
    );
  }

  render() {

    return (
      <div className="App">
        <h1>Counter</h1>
        <span>{Math.floor(this.state.timer/60)}</span>
        <span> min </span>
        <span>{this.state.timer%60}</span>
        <span> sec</span>
        {this.buttons()}
      </div>
    );
  } 
}

export default App;
