import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './tasks.model';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
export declare class TasksService {
    private tasks;
    getAllTasksService(): Task[];
    getTasksWithFilters(filterDto: GetTasksFilterDto): Task[];
    createTaskService(createTaskDto: CreateTaskDto): Task;
    getATaskService(id: string): Task;
    deleteATaskService(id: string): void;
    updateTaskService(id: string, status: TaskStatus): Task;
}
