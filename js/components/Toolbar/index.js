import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return(
            <div className="toolbar col-sm-12">
                <button className="btn btn-default" onClick={this.props.sortByName}>
                    <i className="icon fa fa-sort-alpha-asc"></i>
                    <span>  Sort by name</span>
                </button>
                <button className="btn btn-default" onClick={this.props.sortByAge}>
                    <i className="icon fa fa-sort-numeric-desc"></i>
                    <span>  Sort by age</span>
                </button>
            </div>
        )
    }
}