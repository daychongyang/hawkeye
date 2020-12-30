import http from 'http'
import Koa from 'koa'

import { logger } from './middlewares'
import type { State, Context } from './typings'

interface Options {
  port: number
  host?: string
  listeningListener?: () => void
}

export function createServer(options: Options) {
  const { host = 'localhost', port } = options
  const app = new Koa<State, Context>()

  app.use(logger)

  return http.createServer(app.callback()).listen(port, host, () => {
    const { listeningListener } = options
    if (typeof listeningListener === 'function') listeningListener()

    if (process.env.__DEV__) console.log(`Server is running at: http://${host}:${port}`)
  })
}
