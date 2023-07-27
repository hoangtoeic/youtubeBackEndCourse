import { GqlExecutionContext } from '@nestjs/graphql';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { RequestContext } from '../providers/context/request.context';

@Injectable()
export class GlobalGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const curCtx = ctx.getContext();
    //  const headers = curCtx.req.headers
    const claims =
      curCtx.req.apiGateway?.event?.requestContext?.authorizer?.claims;
    //  const authorization = headers.authorization
    const email = claims?.email;
    if (!email) {
      throw new NotFoundException('Token not found');
    }

    console.log('email', email);

    RequestContext.setRequest(curCtx.req);
    // UserContext.set(currentUser);
    // RoleContext.set(existRoles);
    return true;
  }
}
