import React, { Component } from 'react';

export default class UserData extends Component {
    render() {
        let imageUrl = `../../../../../images/${this.props.image}.svg`;

        return(
            <tr onClick={() => (this.props.clickUser(this.props.id))}>
                <td>
                    <img className="table-image" src={imageUrl} alt=""/>
                </td>
                <td>{this.props.name}</td>
                <td>{this.props.age}</td>
                <td>{this.props.phone}</td>
            </tr>
        )
    }
}