import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent {

  @Output() newTodoEvent = new EventEmitter<Todo>()

  inputTodo: string = ""

  addTodo() {
    if(this.inputTodo.length == 0) {
      alert("Todo tidak boleh kosong!")
      return
    }

    const todo: Todo = {
      content: this.inputTodo,
      completed: false,
      beingEdit: false
    }

    this.newTodoEvent.emit(todo)
    this.inputTodo = ""
  }

}
