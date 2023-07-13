import { Request, Response, NextFunction } from "express";
import { RequestError } from "../../types";

const handleErrors = (
  err: RequestError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const status: number = err.status || 500;
  const message: string = err.error.message || "Internal Server Error";

  res.status(status).send(message);
};

export default handleErrors;
