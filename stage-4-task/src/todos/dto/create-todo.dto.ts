import { ApiProperty } from '@nestjs/swagger';
import type { TodoStatus } from '../entities/todo.entity';

export class CreateTodoDto {
  @ApiProperty({ example: 'Buy groceries' })
  title!: string;

  @ApiProperty({ example: 'Milk, Bread, Eggs' })
  description!: string;

  @ApiProperty({
    enum: ['pending', 'in-progress', 'completed'],
    example: 'pending',
  })
  status?: TodoStatus;
}
