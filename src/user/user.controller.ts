import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { CommentService } from '../comment/comment.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly commentService: CommentService,
  ) {}
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }

  @Post()
  create(@Body() createUserDto: UserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id/comments')
  getComment(@Param('id') id: string) {
    return this.commentService.findUserComments(Number(id));
  }
}
