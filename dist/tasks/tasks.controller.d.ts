import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(filterDto: GetTasksFilterDto): Task[];
    createTask(createTaskDto: CreateTaskDto): Task;
    getATask(id: string): Task;
    deleteATask(id: string): void;
    updateTask(id: string, updateTaskStatusDto: UpdateTaskStatusDto): Task;
}
