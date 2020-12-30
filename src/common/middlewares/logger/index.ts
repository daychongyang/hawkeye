import { Middleware } from 'koa'
import pino from 'pino'
import type { State, Context } from '../../typings'

export const logger: Middleware<State, Context> = (ctx, next) => {
  ctx.logger = pino({
    level: process.env.LOG_LEVEL || 'info',
    prettyPrint: {
      translateTime: true,
    },
  })

  ctx.logger.trace(`${ctx.request.method} ${ctx.path}`)

  return next().catch((e) => {
    ctx.logger.error(e)
  })
}
