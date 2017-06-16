import React, { Component } from 'react';

import UserData from './components/UserData/index';

export default class UserList extends Component {
    render() {
        return(
            <div className="col-sm-8">
                <table className="table">
                    <thead>
                        <tr>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Phone</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.users.map((item, index) => (
                                <UserData
                                    key={index}
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    age={item.age}
                                    phone={item.phone}
                                    phrase={item.phrase}
                                    clickUser={this.props.clickUser}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}