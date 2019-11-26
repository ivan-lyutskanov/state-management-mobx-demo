import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
class Footer extends Component {
  render() {
    const { TodoStore } = this.props;

    return (
      <footer>
        {TodoStore.remainingTodosCount === 0 ? (
          <h4>All Done!</h4>
        ) : (
          <h4>
            You have {TodoStore.remainingTodosCount} of {TodoStore.todosCount}{" "}
            tasks remaining
          </h4>
        )}
      </footer>
    );
  }
}

export default Footer;
