import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {timer: 0, intervalId: null, startButton: true, pauseButton: false, resetButton: false};
  }
  componentDidMount()
  {

  }
  handleStart= (e) => { 
    this.setState({intervalId: setInterval(()=>{
      this.setState({timer: this.state.timer+1});
    },1000) 
  }) 
  this.setState({startButton: false, pauseButton: true, resetButton: true})
}

  handlePause= (e) => {
    clearInterval(this.state.intervalId);

  this.setState({startButton: true, pauseButton: false, resetButton: true})
  }
  handleReset= (e) => {
    clearInterval(this.state.intervalId);
    this.setState({timer: 0,startButton: true, pauseButton: false, resetButton: false});

  }
  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <p>
          {this.state.timer}
        </p>
        <div className="Buttons">
          <button id="start" disabled={!this.state.startButton} onClick={(e)=>this.handleStart(e)}>
            Start
          </button>
          <button id="pause" disabled={!this.state.pauseButton} onClick={(e)=>this.handlePause(e)}>
            Pause
          </button>
          <button id="reset" disabled={!this.state.resetButton} onClick={(e)=>this.handleReset(e)}>
            Reset
          </button>
          
        </div>
        

        
      </div>
    );
  }
  
}

export default App;
