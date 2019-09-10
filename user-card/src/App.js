import React from 'react';

import UserCard from './components/UserCard';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    //Get single user
    fetch('https://api.github.com/users/alfonsoruiz')
      .then(res => res.json())
      .then(user => this.setState({ user: user }))
      .catch(err => console.log(err));

    //Get user followers
    fetch('https://api.github.com/users/alfonsoruiz/followers')
      .then(res => res.json())
      .then(followers => this.setState({ followers: followers }))
      .catch(err => console.log(err));
  }

  render() {
    console.log('user:', this.state.user);
    console.log('follwers:', this.state.followers);
    return (
      <div className="App">
        <UserCard
          name={this.state.user.name}
          avatar={this.state.user.avatar_url}
          website={this.state.user.blog}
          followers={this.state.followers}
        />
      </div>
    );
  }
}

export default App;
