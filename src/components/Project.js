import React, { Component } from 'react';
import './Project.css';
import Guess from './Guess.js';
import ClientGuess from './ClientGuess.js';
//import Compare from './Compare.js'

//point of this constructor is to get a number from the client side

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guesses: [],
      answer: this.getRandomInt(),
      result: ''
    };
  }

  getRandomInt() {
    const min = 1;
    const max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  handleAddGuess(guessItem) {
    this.checkIfWinning(guessItem);

    this.setState(prevState => {
      return {
        guesses: [...prevState.guesses, guessItem]
      };
    });
  }

  checkIfWinning(guessItem) {
    if (parseInt(guessItem.guess) === this.state.answer) {
      this.setState({ result: 'Correct!', isWon: true });
    } else if (parseInt(guessItem.guess) - this.state.answer >= 5) {
      console.log(this.state.answer);
      this.setState({ result: 'Cold! Try again!' });
    } else {
      this.setState({ result: 'Hot! Try again!' });
    }
  }

  handleStartAgain = () => {
    console.log(this);

    this.setState({
      guesses: [],
      answer: this.getRandomInt(),
      result: ''
    });
  };

  render() {
    console.log('render');
    let guessList;
    if (this.state.guesses) {
      guessList = this.state.guesses.map(guessItem => {
        console.log(guessItem);

        return <ClientGuess key={guessItem.id} guessItem={guessItem} />;
      });
    }

    return (
      <div className="Project">
        <Guess addGuess={this.handleAddGuess.bind(this)} />
        <h3>Your Guesses</h3>
        {guessList}
        <br />
        <p>{this.state.result}</p>
        <br />

        {this.state.isWon && (
          <button onClick={this.handleStartAgain.bind(this)}>
            Play again!
          </button>
        )}
        {/*<Answer newAnswer={this.handleNewAnswer.bind(this)}/>    {this.state.answer} */}
      </div>
    );
  }
}

export default Project;
