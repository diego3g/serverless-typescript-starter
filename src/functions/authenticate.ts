// import AWS from 'aws-sdk'
// import { v4 as uuid } from 'uuid'

import { Handler } from 'aws-lambda'
import wrap from '@dazn/lambda-powertools-pattern-basic'

import 'source-map-support/register'

export const handle = wrap<Handler>(async event => {
  console.log(event)

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Success'
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
})
