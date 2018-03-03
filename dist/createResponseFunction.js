const createResponseFunction = callback => response => {
  callback(response);
};

module.exports = createResponseFunction;
