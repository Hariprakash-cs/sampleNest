export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}
export declare enum TaskStatus {
    OPEN = "OPEN",
    IN_PROGRES = "IN_PROGRESS",
    DONE = "DONE"
}
