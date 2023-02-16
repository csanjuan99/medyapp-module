import express from 'express';
import { router as users } from './users.routes';

export default function routes(app: express.Application): void {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', users);
}
