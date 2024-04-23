import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';


@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  findAll(): User[] { // TODO: protect with JWT
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('username') username: string): User {
    return this.usersService.findOne(username);
  }
}
