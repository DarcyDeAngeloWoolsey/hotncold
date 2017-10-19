import React, { Component } from 'react';
import './Guess.css';

//point of this constructor is to get a number from the client side

class Guess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGuess: {}
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const guessNumber = this.numberInput.value.trim();
    /*if (text && this.props.onAdd) {
            this.props.onAdd(text);
        }*/
    if (guessNumber === '') {
      alert('Number is needed');
    } else {
      alert(guessNumber);
      console.log(guessNumber);
      this.setState(
        {
          newGuess: {
            guess: guessNumber
          }
        },
        function() {
          //console.log(this.state);
          this.props.addGuess(this.state.newGuess);
        }
      );
    }
    this.numberInput.value = '';
  }

  /* setEditing(editing) {
        this.setState({

        });
    }*/

  render() {
    return (
      <div className="Guess">
        <form className="app guess-number" onSubmit={e => this.onSubmit(e)}>
          <div>
            <label>Guess a Number Between 1 and 100</label>
            <br />
            <input type="number" ref={input => (this.numberInput = input)} />
          </div>
          <input type="submit" value="Guess" />
          {this.props.result}
        </form>
      </div>
    );
  }
}

export default Guess;
