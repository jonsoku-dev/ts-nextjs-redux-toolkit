export interface Todo {
  id: string;
  desc: string;
  isComplete: boolean;
}

export interface JsonTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
