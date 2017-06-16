import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.props = {
        }
    }

    render() {
        return(
            <div className="searchBar__wrapper col-sm-12">
                <input
                    className="searchBar"
                    placeholder="Search people by name..."
                    type="text"
                    onChange={event => this.props.searchFunc(event.target.value)}
                />
            </div>
        )
    }
}