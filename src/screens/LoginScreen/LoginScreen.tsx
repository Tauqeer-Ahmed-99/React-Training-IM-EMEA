import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import { User } from '../../utils/types';
import "./login-screen.css"

type StateType = {
    username: string;
    password: string;
}

type PropsType = {
    login : (user :User) => void
}


export default class LoginScreen extends Component<PropsType,StateType> {

    state = {
        username : "",
        password: "",
    }

    handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSigninClick = () => {
        if(!this.state.username || !this.state.password){
            alert("Please enter valid username and password.")
        } else {
            this.props.login({ username : this.state.username , password: this.state.password})
        }
    }

  render() {
    return (
    <>
      <Header onLoginPage={true} />
      <div className='login-screen' >
          <div className='inputs'>
          <div className='company-name'>
            <div>Ingram Micro</div>
            <div>EMEA</div>
          </div>
            <div>
              <label>Username</label>
              <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
            </div>
            <div className='password-input'>
              <label>Password</label>
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
            </div>
            <div className='actions'>
              <button className='login-button' onClick={this.handleSigninClick}>Sign in</button>
            </div>
          </div>
        </div>
    </>
    )
  }
}

