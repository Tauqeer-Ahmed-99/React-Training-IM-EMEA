import React, { Component } from 'react'

import "./card.css"

type CardPropsType = {
    title: string;
    content: string;
}

export default class Card extends Component<CardPropsType> {
  render() {
    return (
      <div className='card'>
        <h4>{this.props.title}</h4>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
