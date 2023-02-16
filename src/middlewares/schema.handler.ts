import boom from '@hapi/boom';
import { type NextFunction, type Request, type Response } from 'express';
import type Joi from 'joi';

export const schemaHandler = (schema: Joi.Schema, property: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[property]);
    error != null ? next(boom.badRequest(error)) : next();
  };
};
