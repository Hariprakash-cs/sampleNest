import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    if (Object.keys(filterDto).length) {
      return this.tasksService.getTasksWithFilters(filterDto);
    } else return this.tasksService.getAllTasksService();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    // console.log(title, description);
    return this.tasksService.createTaskService(createTaskDto);
  }

  @Get(`/:id`)
  getATask(@Param('id') id: string): Task {
    return this.tasksService.getATaskService(id);
  }

  @Delete(`/:id`)
  deleteATask(@Param('id') id: string): void {
    this.tasksService.deleteATaskService(id);
  }

  @Patch('/:id')
  updateTask(
    @Param('id') id: string,
    @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  ): Task {
    const { status } = updateTaskStatusDto;
    return this.tasksService.updateTaskService(id, status);
  }
}
