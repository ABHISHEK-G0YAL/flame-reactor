import React from 'react';
import './fire.css'

const worker1 = new Worker('./worker.js');

class Fire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
    };
  }

  toggleFire = () => {
    this.setState(prevState => ({ on: !prevState.on }));
  };

  render() {
    return (
      <div className="fire">
        {
          this.state.on &&
          <div className="flames">
            <div className="flame"></div>
            <div className="flame"></div>
            <div className="flame"></div>
            <div className="flame"></div>
          </div>
        }
        <div className="logs" onClick={this.toggleFire}></div>
      </div>
    );
  }
}

export default Fire;
