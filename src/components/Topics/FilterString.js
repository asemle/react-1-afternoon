import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
    }
    stringFilter() {
        let filteredArray = this.state.unfilteredArray.filter((item) => item.includes(this.state.userInput));
        this.setState({
            filteredArray: filteredArray
        })
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> Names: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input placeholder="enter letters to find" onChange={(e) => this.setState({userInput:e.target.value})} className="inputLine" type="text" name="" id=""></input>
                <button onClick={() => this.stringFilter()}className="confirmationButton">Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString