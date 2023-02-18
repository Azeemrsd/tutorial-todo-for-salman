export interface Todo {
  completed: boolean;
  id: number;
  todo: string;
  userId: number;
}

export interface TodosResponse {
  limit: number;
  skip: number;
  todos: Todo[];
  total: number;
}

