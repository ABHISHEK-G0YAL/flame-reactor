import React from 'react';
import './heater.css'

class Heater extends React.Component {
  state = {
    isOn: false
  }

  handleClick = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  }

  render() {
    return (
      <div>
        <div className={`heater ${this.state.isOn ? 'on' : 'off'}`}>
          <div className={`heater-rod ${this.state.isOn ? 'on' : 'off'}`}></div>
        </div>
        <button onClick={this.handleClick}>Toggle Heater</button>
      </div>
    );
  }
}

export default Heater;
