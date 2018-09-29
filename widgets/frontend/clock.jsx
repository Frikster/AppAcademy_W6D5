import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount(){
    setInterval(() => { this.tick(); }, 1000);
  }

  tick () {
    this.setState({date: new Date()});
  }

  render() {
    let hours = this.state.date.getHours();
    let minutes = this.state.date.getMinutes();
    let seconds = this.state.date.getSeconds();
    let date = this.state.date.getDate();
    return (
      <div className = 'clock'>
        <h1>Clock</h1>
        <div className = 'clock2'>
          <span className = 'time'>
            <h2>Time:</h2>
            <h2>{hours}:{minutes}:{seconds}</h2>
          </span>
          <span className = 'date'>
            <h2>Date:</h2>
            <h2>{this.state.date.toDateString()}</h2>
          </span>
        </div>
      </div>
    );
  }
}

export default Clock;
