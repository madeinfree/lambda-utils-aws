# Yosgo AWS Lambda Utils

## Installation

```
> yarn add labmda-utils-aws
```

## Utils

* constant
* createResponse
* createResponseFunction

### createResponse

Create a default response JSON to reuseful the response for callback function.

#### default

* headers:
  * Content-Type: application/json
* statusCode: 200
* message: ''
* payload: {}
* error: ''

```javascript
const createResponse = require('lambda-utils-aws/dist/createResponse');
const responseBody = createResponse({
  statusCode = 200,
  message = 'Success'
})
/*
  {
    statusCode = 200,
    message = 'Success',
    payload = {},
    error = ''
  }
 */
```

### createResponseFunction

Inside the reponse callback eg: `context.succeed`, and return the callback function.

```javascript
const createResponseFn = require('lambda-utils-aws/dist/createResponseFunction');

exports.handler = (event, context, callback) => {
  const response = createResponseFn(context.succeed);
  response({
    statusCode: 200,
    body: 'OK'
  });
};
```

### License

MIT
