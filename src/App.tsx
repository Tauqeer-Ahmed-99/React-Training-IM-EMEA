import React, { Component } from 'react'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import { User } from './utils/types'


type StateType = {user : User, isLoggedIn : boolean}

export default class App extends Component<{}, StateType> {
  state  = {
    user : null,
    isLoggedIn : false,
  }

  componentDidMount(): void {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user) as User ;
      this.setState({
        user : parsedUser,
        isLoggedIn: true,
      })
    }
  }

  login = (user: User ) => {
    localStorage.setItem("user", JSON.stringify(user))
    this.setState({
      user,
      isLoggedIn :true
    })
  }

  logout = () => {
    localStorage.removeItem("user");
    this.setState({
      user : null, 
      isLoggedIn : false,
    })
  }

  render() {
    return (
      <>
        {!this.state.isLoggedIn && <LoginScreen login={this.login} />}
        {this.state.isLoggedIn && <HomeScreen user={this.state.user} logout={this.logout} />}
      </>
    )
  }
}
