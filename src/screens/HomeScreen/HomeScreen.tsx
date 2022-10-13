import React, { Component } from 'react'
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header'
import { User } from '../../utils/types'

import "./home-screen.css"

type CardData = {
    userId : number;
    id : number;
    title: string;
    body: string;
}

type HomeScreenPropstype = {
    user: User;
    logout: () => void;
}



export default class HomeScreen extends Component<HomeScreenPropstype> {

    state  = {
        data : [] as any,
    }

    async componentDidMount (): Promise<void> {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const data =  await fetch(url);
        const parsedData = await data.json();
        this.setState({
            data: parsedData
        })
    }

  render() {
    return (
        <>
        <Header user={this.props.user} logout={this.props.logout} />
        <main>
            {this.state.data?.map((item : CardData) => <Card key={item.id} title={item.title} content={item.body} /> )}
        </main>
      </>
    )
  }
}
