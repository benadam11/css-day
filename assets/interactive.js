import React, { Component } from "react";
import { Heading } from "spectacle";

export default class Interactive extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    const styles = {
      padding: 20,
      background: "black",
      minWidth: 300,
      marginTop: 20,
      textTransform: "uppercase",
      border: "1px solid #F81CE5",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "2em"
    };
    return (
      <div>
      {this.state.count < 5 ?
        <div>
          <Heading size={5} textColor="secondary">
            The button has been clicked {this.state.count} times
          </Heading>
          <button style={styles} type="button" onClick={this.handleClick}>Click Me</button>
        </div> :
          <Heading size={5} fit caps textColor="black">Easy there pal</Heading>
        }
      </div>
    );
  }
}
