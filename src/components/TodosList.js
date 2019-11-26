import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import AddNewTodo from "./AddNewTodo";

@inject("TodoStore")
@observer
class TodosList extends Component {
  render() {
    const { TodoStore } = this.props;

    const createTodoStyles = isCompleted => ({
      opacity: isCompleted ? 0.3 : 1,
      cursor: "pointer",
      textDecoration: isCompleted ? "line-through" : "none"
    });

    return (
      <div className="TodoList">
        <ul>
          {TodoStore.todos.map((todo, index) => (
            <li
              onClick={() => {
                TodoStore.toggleTodoState(index);
              }}
              style={createTodoStyles(todo.completed)}
              key={index}
            >
              {todo.title}
            </li>
          ))}
        </ul>
        <AddNewTodo />
      </div>
    );
  }
}

export default TodosList;
