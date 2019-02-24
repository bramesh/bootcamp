import React, { Component } from 'react';
import Counter from './components/counter';
import Advisor from './components/advisor';
import './App.css';

class App extends Component {
  state = {
    count: 1
  }

  handleCount = () => {
      this.setState((prevState) => ({
          count: prevState.count + 1
      }))
  }

  handleResetCount = () => {
    this.setState({
      count: 0
    })
  }
  render() {
    return (
      <div className="App">
        <Counter 
          count={this.state.count}
          onCountChange={this.handleCount}
          reset={this.handleResetCount}
          className="helloworld"
        />
        <Advisor />
      </div>
    );
  }
}

export default App;
