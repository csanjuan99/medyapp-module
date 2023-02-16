import express, {
  type NextFunction,
  type Request,
  type Response
} from 'express';
import { UserService } from '../services/users/user.service';
import {
  createUserSchema,
  updateUserSchema,
  getUserSchema
} from '../schemas/user.schema';
import { schemaHandler } from '../middlewares/schema.handler';

const user = new UserService();
export const router = express.Router();

router.get(
  '/',
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      res.json(await user.findAll());
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  schemaHandler(getUserSchema, 'params'),
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      res.json(await user.findOne(Number(req.params.id)));
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  schemaHandler(createUserSchema, 'body'),
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      res.json(await user.create(req.body));
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  schemaHandler(updateUserSchema, 'body'),
  schemaHandler(getUserSchema, 'params'),
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      res.json(await user.update(Number(req.params.id), req.body));
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  schemaHandler(getUserSchema, 'params'),
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      res.json(await user.delete(Number(req.params.id)));
    } catch (error) {
      next(error);
    }
  }
);
