import React from 'react';
import './fire.css'

const createWorkers = n => Array.from({ length: n }, () => new Worker(new URL('./worker.js', import.meta.url)));

class Fire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
    };
    this.workers = [];
  }

  toggleFire = () => {
    this.setState(prevState => ({ on: !prevState.on }));
  };

  componentDidUpdate() {
    if (this.state.on) {
      this.workers = createWorkers(8);
    } else {
      this.workers.map(worker => worker.terminate());
      this.workers = [];
    }
  }

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
