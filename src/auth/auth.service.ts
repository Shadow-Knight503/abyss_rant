import { Injectable } from '@nestjs/common';
import { UserService }

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {
    }
}
