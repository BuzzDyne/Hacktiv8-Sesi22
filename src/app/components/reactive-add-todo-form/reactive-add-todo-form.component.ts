import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl, ControlValueAccessor, Validator, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-reactive-add-todo-form',
  templateUrl: './reactive-add-todo-form.component.html',
  styleUrls: ['./reactive-add-todo-form.component.css']
})
export class ReactiveAddTodoFormComponent {

  @Output() newTodoEvent = new EventEmitter<Todo>()

  addTodoForm = new FormGroup({
    todoName: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  })

  get todoName() {
    return this.addTodoForm.get('todoName')
  }

  onTodoNameBoxChange() {
    console.log("Being Changed");
  }

  addTodo() {
    const todo: Todo = {
      content: this.addTodoForm.get('todoName')?.value,
      completed: false,
      beingEdit: false
    }

    this.newTodoEvent.emit(todo)
    // Reset Form
  }

}
