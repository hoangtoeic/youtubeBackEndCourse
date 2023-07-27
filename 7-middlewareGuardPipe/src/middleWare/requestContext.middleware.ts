import { Injectable, NestMiddleware } from '@nestjs/common';

import { RequestContext } from '../providers/context/request.context';

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  use<T, K>(req: T, res: K, next: () => void) {
    const session = RequestContext.initSession();
    session.run(async () => {
      next();
    });
  }
}
