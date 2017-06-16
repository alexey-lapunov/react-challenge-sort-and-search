import React, { Component } from 'react';

import SearchBar from './components/SearchBar/index';
import Toolbar from './components/Toolbar/index';
import UserList from './components/UserList/index';
import ActiveUser from './components/ActiveUser/index';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: this.props.usersArr,
            ageDirection: true,
            nameDirection: true,
            activeUser: 0
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.sortByAge = this.sortByAge.bind(this);
        this.sortByName = this.sortByName.bind(this);
        this.setActiveUser = this.setActiveUser.bind(this);
    }

    handleSearch (value) {
        const users = this.props.usersArr.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
        const userId = users.length ? users[0].id : 0

        this.setState({
            users: users,
            activeUser: userId
        });
    };

    sortByAge () {
        const { users, ageDirection: direction }  = this.state;

        this.setState({
            users: direction ? [...users].sort((a,b) => a.age - b.age) : [...users].sort((a,b) => b.age - a.age),
            ageDirection: !direction,
            activeUser: users[0].id // TODO: new user state create new const and add users here
        });
    }

    sortByName() {
        //TODO: how in sortByAge
        const users = this.state.users;
        const direction = this.state.nameDirection;
        const sortedUsers = users.sort(direction ? (a,b) => a.name > b.name ? 1 : -1 : (a,b) => a.name < b.name ? 1 : -1);

        this.setState({
            users: sortedUsers,
            nameDirection: !direction,
            activeUser: users[0].id
        });
    }

    setActiveUser(activeUser) {
        this.setState({ activeUser })
    }

    render() {
      return(
          <section className="container">
            <div className="row">
                <SearchBar searchFunc={this.handleSearch}/>
            </div>
            <div className="row">
            <Toolbar sortByAge={this.sortByAge} sortByName={this.sortByName}/>
            </div>
            <div className="row">
                <ActiveUser activeUser={this.state.users.find((item) => item.id === this.state.activeUser)}/>
                <UserList users={this.state.users} clickUser={this.setActiveUser}/>
            </div>
          </section>
      )
    }
}


