//Lambdaで動かす際に使用する。

'use strict'
// const awsServerlessExpress = require(process.env.NODE_ENV === 'test' ? '../../index' : 'aws-serverless-express')

import * as awsServerlessExpress from 'aws-serverless-express'
import app from './app'

// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this is likely
// due to a compressed response (e.g. gzip) which has not been handled correctly
// by aws-serverless-express and/or API Gateway. Add the necessary MIME types to
// binaryMimeTypes below, then redeploy (`npm run package-deploy`)

//ここに指定したContentTypeは、Base64エンコードされる。
//ResponseをGZIPで圧縮した場合などに指定が必要になる模様。一旦無視する。
const binaryMimeTypes : string[] = [
  // 'application/javascript',
  // 'application/json',
  // 'application/octet-stream',
  // 'application/xml',
  // 'font/eot',
  // 'font/opentype',
  // 'font/otf',
  // 'image/jpeg',
  // 'image/png',
  // 'image/svg+xml',
  // 'text/comma-separated-values',
  // 'text/css',
  // 'text/html',
  // 'text/javascript',
  // 'text/plain',
  // 'text/text',
  // 'text/xml'
]
const server = awsServerlessExpress.createServer(app, undefined, binaryMimeTypes)

exports.handler = (event:any, context:any) => awsServerlessExpress.proxy(server, event, context)
