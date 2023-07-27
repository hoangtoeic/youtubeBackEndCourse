import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserResponse {
  @Field((_) => Int)
  id: number;

  @Field()
  userName: string;
}
