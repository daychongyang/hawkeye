import http from 'http'
import Koa from 'koa'

import { logger } from './middlewares'
import type { State, Context } from './typings'

interface Options {
  port: number
  host?: string
  listeningListener?: () => void
}

const listener = (host: string, port: number) => {
  console.log(`Server is running at: http://${host}:${port}`)
}

export function createServer(options: Options) {
  const { host = 'localhost', port, listeningListener = listener.bind(null, host, port) } = options
  const app = new Koa<State, Context>()

  app.use(logger)

  app.use((ctx) => {
    ctx.logger.info('1324')
  })

  return http.createServer(app.callback()).listen(port, host, listeningListener)
}
