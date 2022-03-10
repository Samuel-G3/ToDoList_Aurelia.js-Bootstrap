
import { Todo } from "./todo";  //importar la clase creada en todo.js
 


export class App {
  constructor() {
    this.heading = 'Mi lista de tareas pendientes';
    this.todos= []
    this.todoDescription = '';
  }

addTodo() {
  if(this.todoDescription) {
    this.todos.push(new Todo(this.todoDescription));
    this.todoDescription= '';
  }
}


removeTodo(todo) {
  let index = this.todos.indexOf(todo);
  if (index !== -1) {
    this.todos.splice(index, 1);
  }
}

  //message = 'Escribe tus tareas pendientes';
}
