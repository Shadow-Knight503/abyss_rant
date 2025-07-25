import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/createUserDto';

@Injectable()
export class UserService {
  findOne(id: number) {
    return {
      id: id,
    };
  }

  create(createUserDto: UserDto) {
    return 'User created successfully.';
  }
}
