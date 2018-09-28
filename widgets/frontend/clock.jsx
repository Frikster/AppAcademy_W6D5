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
      <div>
        <h1>Clock</h1>
        <h1>Time: {hours}:{minutes}:{seconds}</h1>
        <h1>Date: {date}</h1>
        <h1>Date: {this.state.date.toDateString()}</h1>
      </div>
    );
  }
}

export default Clock;
