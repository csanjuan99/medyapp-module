import { type NextFunction, type Request, type Response } from 'express';

export function boomException(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (!err.isBoom) {
    next(err);
  }
  const { output } = err;
  res.status(output.statusCode).json(output.payload);
}
