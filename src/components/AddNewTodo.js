import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
class AddNewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleClick = () => {
    if (!this.state.input) return;
    this.props.TodoStore.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="AddNewTodo">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
        />
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default AddNewTodo;
