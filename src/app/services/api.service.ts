import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Todo, TodosResponse } from "src/interfaces/Todo.interface";

@Injectable({providedIn: 'root'})

export class ApiService {
    constructor(private httpClient: HttpClient) {}

    public todos: Todo[] = []
    
    public getProducts(): Observable<TodosResponse> {
        return this.httpClient.get<TodosResponse>('https://dummyjson.com/todo')
    }

    public setProducts(todo: Todo): Observable<Todo> {
        return this.httpClient.post<Todo>('https://dummyjson.com/todos/add', todo)
    }
}