class ApiError extends Error {
  constructor(message, statusCode, error = [], stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.error = error;
    this.stack = stack;
    this.data= null;
    this.message = message;
    this.success = false;
  }
}

export {ApiError};
