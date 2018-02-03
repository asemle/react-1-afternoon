import React, { Component } from 'react'

class Palindrome extends Component {

    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    check(input) {
        var reversed = input.split("").reverse().join("");
        console.log(reversed)
        var result = input === reversed;
        console.log(result);
        this.setState({
            palindrome: result.toString()
        })
    }
    render() {
        return (
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input placeholder="enter a string to see if its a palindrome" onChange={(e) => this.setState({ userInput: e.target.value })}
                    type="text" name="" className="inputLine"></input>
                <button onClick={() => this.check(this.state.userInput)} className="confirmationButton">Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
                
            </div>
        )
    }
}

export default Palindrome