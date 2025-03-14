import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import DeleteTaskUseCase from '../UseCase/DeleteTask/DeleteTask';
import GetAllTasksUseCase from '../UseCase/GetAllTasks/GetAllTasksUseCase';
import SaveTaskDto from '../UseCase/SaveTask/SaveTaskDto';
import SaveTaskUseCase from '../UseCase/SaveTask/SaveTaskUseCase';
import UseCaseFactory from '../UseCase/UseCaseFactory';

@Controller()
export default class TaskController {
  constructor(private readonly useCaseFactory: UseCaseFactory) {}

  // READ
  @Get('/tasks')
  async getAll() {
    // Get all tasks
    return (await this.useCaseFactory.create(GetAllTasksUseCase)).handle();
  }

  // CREATE
  @Post('/tasks')
  async create(@Body() dto: SaveTaskDto) {
    // Creating a new task
    return (await this.useCaseFactory.create(SaveTaskUseCase)).handle(dto);
  }

  // UPDATE
  @Patch('/tasks/:id')
  async update(@Param('id') id: string, @Body() dto: SaveTaskDto) {
    dto.id = Number(id);
    // Updating an existing task
    return (await this.useCaseFactory.create(SaveTaskUseCase)).handle(dto);
  }

  // DELETE
  @Delete('/tasks/:id')
  async delete(@Param('id') id: string) {
    // Deleting a task
    return (await this.useCaseFactory.create(DeleteTaskUseCase)).handle(
      Number(id),
    );
  }
}
