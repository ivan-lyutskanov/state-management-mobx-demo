import { observable, action, computed } from "mobx";

class TodosStore {
  @observable todos = [
    { title: "Buy Coffee", completed: false },
    { title: "Buy Ice Cream", completed: true },
    { title: "Feed The Cat", completed: false },
    { title: "Do The Dishes", completed: true },
    { title: "Wash The Car", completed: false }
  ];

  @action addTodo = todo => {
    this.todos.push({ title: todo, completed: false });
  };

  @action toggleTodoState = index => {
    this.todos[index].completed = !this.todos[index].completed;
  };

  @computed get remainingTodosCount() {
    return this.todos.filter(todo => !todo.completed).length;
  }

  @computed get todosCount() {
    return this.todos.length;
  }
}

const singleton = new TodosStore();
export default singleton;
