if (!process.env.__DEV__) {
  const moduleAlias = require('module-alias')
  moduleAlias.addAliases({
    '@': 'dist',
    common: 'dist/common',
  })
  moduleAlias()
}

import { createServer } from 'common'

createServer({
  port: 9527,
})
