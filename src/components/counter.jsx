import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   count: this.props.counter.value,
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevProps", prevProps);
  //   console.log("prevState", prevState);
  // }
  // componentWillUnmount(prevState){
  //   console.log("Component unmount");
  // }
  render() {
    // console.log("props", this.props);
    return (
      <div className="ml-4">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm ml-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "please add tags"} */}
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };
  formatCount = () => {
    // console.log(this.state.count);
    const { value } = this.props.counter;
    return value === 0 ? <h5>Zero</h5> : <h5>{value}</h5>;
  };
  // handleIncrement = (e) => {
  //   // console.log(e);
  //   this.setState({ count: this.state.count + 1 });
  // };
}

export default Counter;
