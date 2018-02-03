import React, {Component} from 'react'

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray:[],
            oddArray:[],
            userInput:''
        }
    }
    sort(input) {
        console.log(input)
        var arr = input.split(',');
        arr.forEach(function (x, y, z) { z[y] = x | 0 })
        console.log(arr)
        var evens = arr.filter((item) => Number(item) % 2 === 0);
        var odds = arr.filter((item) =>  Number(item) % 2 !== 0);
        console.log(evens, odds)
        this.setState({
            evenArray: evens,
            oddArray: odds,
            userInput: ''
        })
    }
    render() {
       return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input placeholder="enter numbers separated by comma" onChange={(e) => this.setState({userInput:e.target.value})} 
                type="text" name="" className="inputLine"></input>
                <button onClick={() => this.sort(this.state.userInput)} className="confirmationButton">Split</button>
                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray) } </span>
        <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray) } </span>
            </div>
        )
    }
}

export default EvenAndOdd