import React, { Component } from 'react'

class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    add(x,y) {
        var sum = Number(x) + Number(y);
        this.setState({
            sum: sum
        })
    }
    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input placeholder="x" onChange={(e) => this.setState({ number1: e.target.value })}
                    type="text" name="" className="inputLine"></input>
                <input placeholder="y" onChange={(e) => this.setState({ number2: e.target.value })}
                    type="text" name="" className="inputLine"></input>
                <button onClick={() => this.add(this.state.number1, this.state.number2)} className="confirmationButton">Add</button>
                <span className="resultsBox"> Sum: {this.state.sum} </span>
            </div>
        )
    }
}

export default Sum