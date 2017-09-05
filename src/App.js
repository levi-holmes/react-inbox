import React, { Component } from 'react';
import './index.css';
import Toolbar from './components/Toolbar.js'
import MessageList from './components/MessageList'
// import data from './components/MessageData'

const baseURL = 'https://cryptic-savannah-79087.herokuapp.com/api'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }

   async componentDidMount(){
    try{
     const response = await fetch(`${baseURL}/messages`)
     const  json = await response.json()
     this.setState ({messages: json._embedded.messages})
    }catch(err){
    }

   }

  render() {
    return (
      <div>
        <Toolbar />
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
