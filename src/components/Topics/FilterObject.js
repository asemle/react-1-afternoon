import React, { Component } from 'react'

class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            unfilteredArray: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                },
                {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                },
                {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                }
            ],
            userInput: "",
            filteredArray: []
        }
    }
    filterArr() {
        var filtered = this.state.unfilteredArray.filter((item) => this.state.userInput in item );
        this.setState({
            filteredArray: filtered
        })
    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input placeholder="enter a property" type="text" onChange={(e) => this.setState({userInput:e.target.value})} className="inputLine"></input>
                <button onClick={() => this.filterArr()}className="confirmationButton"></button>
                <span className="resultsBox filterObjectRb">Filtered: {JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
        )
    }
}

export default FilterObject