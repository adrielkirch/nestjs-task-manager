import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateRequestUserDto } from 'src/adapters/request/adapter.request.user';
import { UserService } from 'src/services/service.user';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() dto: CreateRequestUserDto) {
    return await this.userService.create(dto);
  }

  @Post('login')
  async login(@Body() dto: any) {
    return await this.userService.login(dto);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get('paginated')
  async findPaginated(@Query('page') page: number, @Query('limit') limit: number){
    return await this.userService.findPaginated(page,limit);
  }

  @Get('find-by-id')
  async findById(@Query('id') id: string) {
    return await this.userService.findById(id);
  }
}
