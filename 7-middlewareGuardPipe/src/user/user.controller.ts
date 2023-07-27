import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserResponse } from './dto/response/user.response';

@Resolver()
export class UserController {
  constructor(private userService: UserService) {}

  @Query((returns) => UserResponse)
  async getOne(): Promise<UserResponse> {
    return await this.userService.getOne();
  }
}
