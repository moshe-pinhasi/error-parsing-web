import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  @Output() addTodoEvent: EventEmitter<Todo> = new EventEmitter<Todo>();

  todo: Todo = {
    content: '',
    description: '',
    doneAt: null,
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmitTodo() {
    this.addTodoEvent.emit({ ...this.todo });
    this.todo.content = '';
    this.todo.description = '';
  }
}
