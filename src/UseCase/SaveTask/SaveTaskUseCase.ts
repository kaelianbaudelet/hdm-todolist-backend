import { Injectable, BadRequestException } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import SaveTaskDto from './SaveTaskDto';
import TaskRepository from '../../Repositories/TaskRepository';

@Injectable()
export default class SaveTaskUseCase
  implements UseCase<Promise<Task>, [dto: SaveTaskDto]>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(dto: SaveTaskDto): Promise<Task> {
    // TDO SaveTaskDto Validator
    if (!dto.name || dto.name.trim().length === 0) {
      throw new BadRequestException(
        'The task name is required and cannot be empty.',
      );
    }

    try {
      // Save the task
      const task = await this.taskRepository.save({
        id: dto.id,
        name: dto.name,
      });

      return task;
    } catch (error) {
      // If an error occurs, we throw a BadRequestException
      throw new BadRequestException('Error when saving the task.');
    }
  }
}
