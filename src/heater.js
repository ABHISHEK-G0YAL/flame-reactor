import React from 'react';
import './heater.css'

class Heater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
    };
  }

  togglePower = () => {
    this.setState((prevState) => ({ on: !prevState.on }));
  };

  render() {
    return (
      <div className={`heater${this.state.on ? ' on' : ''}`}>
        <div className={`heater-rod${this.state.on ? ' on' : ''}`}></div>
        <div className={`heater-rod${this.state.on ? ' on' : ''}`}></div>
        <div className={`heater-rod${this.state.on ? ' on' : ''}`}></div>
        <div className={`heater-power-button${this.state.on ? ' on' : ''}`} onClick={this.togglePower}></div>
      </div>
    );
  }
}

export default Heater;
