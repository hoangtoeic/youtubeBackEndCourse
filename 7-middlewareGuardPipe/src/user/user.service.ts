import { Injectable } from '@nestjs/common';
import { UserResponse } from './dto/response/user.response';

@Injectable()
export class UserService {
  async getOne(): Promise<UserResponse> {
    const user = new UserResponse();

    user.id = 1;
    user.userName = 'hoang';
    return user;
  }
}
