import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/interfaces/Todo.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {

  public subscriptions: Subscription[] = []
  public todos: Todo[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.apiService.getProducts().subscribe({
        next: (response) => {
          console.log(response.todos)
          this.todos = response.todos;
          this.apiService.todos = this.todos;
        },
        error: (err) => {
          console.log(err)
        }
      })
    )
    const todo = {completed: false,id: 12, todo: "Wake up in the morning", userId: 29}
    this.subscriptions.push(
      this.apiService.setProducts(todo).subscribe({
        next:(response) => {
          console.log(response, "Setting this todo in the list")
          this.todos.push(response)
        }
      })
    );
  }


  ngOnDestroy(): void {
    console.log("Todo component is destroyed")
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
