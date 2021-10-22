import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

export class App extends Component {
  apiKey= 'faaa807f700f4a1a925a4443f1b08a0a'
  state={
    progress:10
  }

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }


  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
       
      />
        <Switch>
          <Route exact  path="/">
          <News setProgress= {this.setProgress} apiKey={this.apiKey} key="general" pageSize={5} country="in" category="general"/>
          </Route>
          <Route  exact  path="/business">
          <News setProgress= {this.setProgress} apiKey={this.apiKey} key="business" pageSize={5} country="in" category="business"/>
          </Route>
          <Route  exact  path="/science">
          <News setProgress= {this.setProgress} apiKey={this.apiKey} key="science" pageSize={5} country="in" category="science"/>
          </Route>
          <Route  exact  path="/technology">
          <News setProgress= {this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={5} country="in" category="technology"/>
          </Route>
          <Route  exact  path="/health">
          <News setProgress= {this.setProgress} apiKey={this.apiKey} key="health" pageSize={5} country="in" category="health"/>
          </Route>
          <Route  exact  path="/sports">
          <News setProgress= {this.setProgress} apiKey={this.apiKey} key="sports" pageSize={5} country="in" category="sports"/>
          </Route>
          <Route  exact  path="/entertainment">
          <News setProgress= {this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={5} country="in" category="entertainment"/>
          </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
