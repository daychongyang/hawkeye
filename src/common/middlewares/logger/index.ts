import { Middleware } from 'koa'
import pino from 'pino'

export const logger: Middleware = (ctx, next) => {
  ctx.logger = pino()
  return next().catch((e) => {
    ctx.logger.error(e)
  })
}
