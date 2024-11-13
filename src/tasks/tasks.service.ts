import { CreateTaskDto } from './dto/create-task.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasksService(): Task[] {
    return this.tasks;
  }
  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;
    const tasks = this.getAllTasksService();
    if (status) {
      return tasks.filter((task) => task.status === status);
    }
    if (search) {
      return tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(search) ||
          task.description.toLowerCase().includes(search),
      );
    }
    if (status) {
      return tasks.filter((task) => task.status === status);
    }
    if (status && search) {
      return tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(search) ||
          task.description.toLowerCase().includes(search) ||
          task.status === status,
      );
    }
    return this.tasks;
  }
  createTaskService(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
  getATaskService(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }
  deleteATaskService(id: string): void {
    const filteredTasks = this.tasks.filter((task) => task.id !== id);
    this.tasks = filteredTasks;
  }

  updateTaskService(id: string, status: TaskStatus): Task {
    console.log(status);
    const taskToUpdate = this.getATaskService(id);
    taskToUpdate.status = status;
    return taskToUpdate;
  }
}
