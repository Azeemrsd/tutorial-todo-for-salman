import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-todo-list',
  // templateUrl: './todo-list.component.html',
  template: `<h1>This is inside todo list</h1>`
})
export class TodoListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log(this.apiService.todos,"coming from todo list");
  }

}
