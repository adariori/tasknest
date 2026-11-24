import { TaskPriority } from "../enums/task-priority.enum.js";
import { TaskStatus } from "../enums/task-status.enum.js";

export class Task {
    id : number;
    title : string;
    description : string;
    status : TaskStatus;
    priority : TaskPriority;
    dueDate: string;
    createdAt : Date;
    updatedAt : Date;
}