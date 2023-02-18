import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../interfaces/Todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'demo-app';
  todos: Todo[] = []

  form: FormGroup = this.fb.group({
    name: ["", Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  submit(event: any) {
    console.log(this.form)
  }
  
}
