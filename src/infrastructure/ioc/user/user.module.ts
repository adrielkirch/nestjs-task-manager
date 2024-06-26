import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user/user.controller';
import { UserRepositoryInterface } from 'src/data/protocols/db/user/user.repository.interface';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { MongodbUserRepository } from 'src/infrastructure/database/mongodb/repositories/user/mongodb.user.repository';
import { UserService } from 'src/services/user/user.service';
import { AddUserUseCase } from 'src/usecases/user/add.user.usecase';
import { FindByIdUserUseCase } from 'src/usecases/user/findById.user.usecase';
import { FindByPropertyAndValueUsersUseCase } from 'src/usecases/user/findByPropertyAndValue.user.usecase';

import { LoginUserUseCase } from 'src/usecases/user/login.user.usecase';
import { FindPaginatedUsersUseCase } from 'src/usecases/user/findPaginated.user.usecase';
import { UpdateUserUseCase } from 'src/usecases/user/update.user.usecase';

/**
 * The UserModule is responsible for managing / inject user-related dependencies and controllers.
 * It imports the DatabaseModule to establish a database connection.
 * It also declares the UserController to handle user-related HTTP requests.
 */
@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: UserService,
      useFactory: (userRepo: UserRepositoryInterface) => {
        return new UserService(
          new AddUserUseCase(userRepo),
          new UpdateUserUseCase(userRepo),

          new FindByIdUserUseCase(userRepo),
          new FindPaginatedUsersUseCase(userRepo),
          new FindByPropertyAndValueUsersUseCase(userRepo),
          new LoginUserUseCase(userRepo),
        );
      },
      inject: [MongodbUserRepository],
    },
    
  ],
  controllers: [UserController],
})
export class UserModule { }
