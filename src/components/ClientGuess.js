import React, { Component } from 'react';
import './ClientGuess.css';

//point of this constructor is to get a number from the client side

class ClientGuess extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ClientGuess">
        <li className="Project">{this.props.guessItem.guess}</li>
      </div>
    );
  }
}

export default ClientGuess;
