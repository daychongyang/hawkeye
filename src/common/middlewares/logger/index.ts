import pino from 'pino'

import type { Middleware } from 'koa'
import type { State, Context } from 'common/typings'

export const logger: Middleware<State, Context> = (ctx, next) => {
  ctx.logger = pino({
    level: process.env.LOG_LEVEL || 'info',
    prettyPrint: {
      translateTime: true,
    },
  })

  ctx.logger.trace(`${ctx.request.method} ${ctx.path}`)

  return next()
}
