import React, { Component } from 'react';

export default class ActiveUser extends Component {
    render() {

        if(!this.props.activeUser) {
            return(
                <div className="col-sm-4">
                    <h3>Nothing found :(</h3>
                </div>
            )
        }

        let imageUrl = `../../../images/${this.props.activeUser.image}.svg`;

        return(
            <div className="thumbnail col-sm-4">
                <img src={imageUrl} alt=""/>
                <h3>{this.props.activeUser.name}</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Age:</td>
                            <td>{this.props.activeUser.age}</td>
                        </tr>
                        <tr>
                            <td>Favorite animal:</td>
                            <td>{this.props.activeUser.image}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>{this.props.activeUser.phone}</td>
                        </tr>
                    </tbody>
                </table>
                <p><b>Favorite phrase:</b> {this.props.activeUser.phrase}</p>
            </div>
        )
    }
}