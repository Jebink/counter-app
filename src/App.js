import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  constructor() {
    super();
    // console.log("App-constructor");
  }
  componentDidMount() {
    //Ajax call
    //setstate new data
    // console.log("app mounted");
  }
  handleIncrement = (counter) => {
    const { counters } = this.state;
    let index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const { counters } = this.state;
    let index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counterId !== counter.id
    );
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((_) => {
      _.value = 0;
      return _;
    });
    this.setState({ counters });
  };
  render() {
    // console.log("App-render");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container"></main>
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default App;
