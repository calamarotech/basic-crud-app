import React, { Component } from 'react';
import './temperatures.css';

class Temperatures extends Component {
  constructor() {
    super();
    this.state = {
      temperatures: [],
    };
  }

  componentDidMount() {
    fetch('/api/temps')
      .then((res) => res.json())
      .then((temperatures) =>
        this.setState({ temperatures }, () =>
          console.log('temperatures fetched...')
        )
      );
  }

  render() {
    return (
      <div>
        <h2>Temperatures</h2>
        <ul>
          {this.state.temperatures.map((temperature) => (
            <li key={temperature.city}>
              {temperature.city} {temperature.temp}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Temperatures;
