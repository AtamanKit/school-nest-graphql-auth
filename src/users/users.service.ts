import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';


interface User {
  id: number;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'Marius',
      password: 'not-secure',
    },
    {
      id: 2,
      username: 'Maria',
      password: 'not-secure',
    }
  ]

  create(createUserInput: CreateUserInput) {
    const user: User = {
      ...createUserInput,
      id: this.users.length + 1,
    };

    this.users.push(user);

    return this.users;
  }

  findAll() {
    return this.users;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
