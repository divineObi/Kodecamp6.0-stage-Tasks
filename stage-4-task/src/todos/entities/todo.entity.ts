export type TodoStatus = 'pending' | 'in-progress' | 'completed';

export class Todo {
  id!: number;
  title!: string;
  description!: string;
  status!: TodoStatus;
}
