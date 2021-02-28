import { Component } from '@angular/core';
import { Todo } from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[];

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        doneAt: null,
        description: 'Description',
      },
      {
        content: 'Second todo',
        doneAt: new Date(),
        description: 'Second Description',
      },
    ];
  }

  onAddTodo(todo: Todo) {
    this.todos.unshift(todo);
  }

  onThrowError() {
    throw Error('Some error');
  }
}
