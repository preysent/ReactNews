
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {

  constructor(){
    super();
    this.state={
      category:"general",
      progress:0,

      // here i get api key from env.local folder
      apiKey:process.env.REACT_APP_NEWS_API_KEY

      
      // apiKey:"3bf5fc929c224dee98e4cdf51e86db5d"
    }
  }

  // to use setState this fn should be an arrow fn
  setProgdress=(value)=>{
    console.log("barr")
    this.setState({
      progress:value
    })
  }
  render() {

    
    return (
      
    <Router>

      <div>
        <Navbar title="Preysent" />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />

        <Switch>
          <Route exact path="/"><News apikey={this.state.apiKey} ProgressFn={this.setProgdress} key="general" category="general"/></Route>
          <Route exact path="/business"><News apikey={this.state.apiKey} ProgressFn={this.setProgdress} key="business" category="business"/></Route>
          <Route exact path="/entertainment"><News apikey={this.state.apiKey} ProgressFn={this.setProgdress} key="entertainment" category="entertainment"/></Route>
          <Route exact path="/health"><News apikey={this.state.apiKey} ProgressFn={this.setProgdress} key="health" category="health"/></Route>
          <Route exact path="/science"><News apikey={this.state.apiKey} ProgressFn={this.setProgdress} key="science" category="science"/></Route>
          <Route exact path="/sports"><News apikey={this.state.apiKey} ProgressFn={this.setProgdress} key="sports" category="sports"/></Route>
          <Route exact path="/technology"><News apikey={this.state.apiKey} ProgressFn={this.setProgdress} key="technology" category="technology"/></Route>
        </Switch>
       
      </div>
      
    </Router>
    )
  }
}


