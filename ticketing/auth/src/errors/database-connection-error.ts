import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  reason = "Error connecting to db";
  statusCode = 500
  constructor() {
    super('Db connection error');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
  serializeErrors(){
    return [
        {
            message: this.reason
        }
    ]
  }
}

throw new Error('hello')
