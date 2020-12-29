import type { DefaultContext, DefaultState } from 'koa'
import { Logger } from 'pino'

export interface State extends DefaultState {}

export interface Context extends DefaultContext {
  logger: Logger
}
