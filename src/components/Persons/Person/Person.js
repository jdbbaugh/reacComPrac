import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import classes from "./Person.css";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please log in</p>
        )}
        <p onClick={this.props.click}>
          I am {this.props.name} i am {this.props.age} years old
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default Person;
