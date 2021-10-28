import { Component, OnInit, DoCheck } from '@angular/core';
import {Todo} from '../../models/Todo'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, DoCheck {

  todos: Todo[] = [];
  doneCount: number = 0;
  // {{todos.filter((v,i) => v.completed == true).length}}

  ngDoCheck(): void {
    this.doneCount = this.todos.filter((v,i) => v.completed == true).length
    // console.log("onChanges!!!");
    
  }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Task',
        completed: true,
        beingEdit: false
      },
      {
        content: 'Second Tasks',
        completed: false,
        beingEdit: false
      },
      {
        content: 'Last Task',
        completed: false,
        beingEdit: false
      }
    ]
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  toggleDone(id:number) {
    this.todos.map((v, i) => {
      if (i ==id) {
        v.completed = !v.completed;
      }
      // console.log(v);
      // return v
    })
  }

  toggleBeingEdit(id:number) {
    this.todos.map((v, i) => {
      if (i ==id) {
        v.beingEdit = !v.beingEdit;
      }
      // console.log(v);
      // return v
    })
  }

  deleteTodo(id:number) {
    this.todos = this.todos.filter((v,i) => i !== id)
  }

}
