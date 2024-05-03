
import { CreateRequestTaskDto } from 'src/adapters/request/adapter.request.task';
import { Task } from 'src/domain/task/task';
import { TaskModel } from 'src/infrastructure/database/mongodb/models/task/task.model';

/**
 * Interface defining the contract for interacting with task data storage.
 * Implementations of this interface are responsible for CRUD operations on task data.
 */
export interface TaskRepositoryInterface {
  /**
   * Creates a new task in the data storage.
   * @param data The task data to be stored.
   * @returns A Promise that resolves to the created TaskModel.
   */
  create: (data: CreateRequestTaskDto) => Promise<TaskModel>;


  /**
   * Retrieves paginated tasks from the data storage.
   * @param page The page number for pagination.
   * @param limit The limit of tasks per page.
   * @returns A Promise that resolves to an array of TaskModel representing tasks for the specified page.
   */
  findPaginated: (page: number, limit: number) => Promise<TaskModel[]>;

  /**
  * Retrieves tasks from the data storage that match a specific property and value.
  * @param property The property to search by.
  * @param value The value to search for.
  * @returns A Promise that resolves to an array of TaskModel representing matching tasks.
  */
  findByPropertyAndValue: (property: string, value: any) => Promise<TaskModel[]>;

  /**
   * Retrieves a task by its unique identifier from the data storage.
   * @param id The unique identifier of the task to retrieve.
   * @returns A Promise that resolves to the TaskModel representing the found task.
   */
  findById: (id: string) => Promise<TaskModel>;

  /**
   * Retrieves all users from the data storage.
   * @returns A Promise that resolves to an array of UserModel representing all users.
   */
    find: () => Promise<TaskModel[]>;


  /**
   * Updates an existing task in the data storage.
   * @param id The unique identifier of the task to update.
   * @param dataUpdate The updated task data.
   * @returns A Promise that resolves to the updated TaskModel.
   */
  update: (id: string, dataUpdate: Task) => Promise<TaskModel>;

  /**
   * Removes a task from the data storage by its unique identifier.
   * @param id The unique identifier of the task to remove.
   * @returns A Promise that resolves when the task is successfully removed.
   */
  remove: (id: string) => Promise<void>;
}
