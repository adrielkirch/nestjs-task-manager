// Import the Module decorator from the '@nestjs/common' package
import { Module } from '@nestjs/common';

// Import the MongooseModule from the '@nestjs/mongoose' package
import { MongooseModule } from '@nestjs/mongoose';

// Import the MongodbModule from the './mongodb/mongodb.module' file
import { MongodbModule } from './mongodb/mongodb.module';

// Import the UserModel and UserSchema from the './mongodb/models/user/user.model' file
import { UserModel, UserSchema } from './mongodb/models/user/user.model';

// Import the MongodbUserRepository from the './mongodb/repositories/user/mongodb-user-repository' file
import { MongodbUserRepository } from './mongodb/repositories/user/mongodb-user-repository';
import { MongodbTaskRepository } from './mongodb/repositories/task/mongodb-task-repository';
import { TaskModel, TaskSchema } from './mongodb/models/task/task.model';

// Decorate the DatabaseModule class with the @Module decorator
@Module({
  // Specify the modules to be imported by the DatabaseModule
  imports: [
    // Import the MongodbModule to initialize the MongoDB connection
    MongodbModule,
    
    // Import the MongooseModule and register the UserModel with its associated schema
    MongooseModule.forFeature([
      {
        name: UserModel.name, // Specify the name of the model
        schema: UserSchema, // Specify the schema associated with the model
      },
      {
        name: TaskModel.name,
        schema: TaskSchema,
      },
    ]),
  ],
  
  // Specify the modules and providers to be exported by the DatabaseModule
  exports: [MongodbUserRepository, MongodbTaskRepository, MongodbModule],
  
  // Specify the providers (services) to be included in the DatabaseModule
  providers: [MongodbUserRepository, MongodbTaskRepository],
})
export class DatabaseModule {}
