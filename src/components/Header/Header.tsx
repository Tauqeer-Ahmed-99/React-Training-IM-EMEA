import React, { Component } from 'react'
import { User } from '../../utils/types'
import "./header.css"

type HeaderPropsType = {
  user ?: User;
  onLoginPage ?: boolean;
  logout ?: () => void;
}

export default class Header extends Component<HeaderPropsType> {

  handleSignout = () => {
    this.props.logout?.()
  }
  
  render() {
    const welcomeMessage = this.props.onLoginPage ? "Welcome to React Training" : `Hello ${this.props.user?.username}!`
    return (
      <header>
        <h1>{welcomeMessage}</h1> 
        {!this.props.onLoginPage && <button className='signout-button' onClick={this.handleSignout}> Sign out </button>}
      </header>
    )
  }
}
