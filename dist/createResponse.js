const { REQUEST_SUCCESS } = require('./constant');

const createResponse = ({
  statusCode = REQUEST_SUCCESS,
  message = '',
  payload = {},
  error = ''
}) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    status: statusCode,
    message,
    payload,
    error
  })
});

module.exports = createResponse;
