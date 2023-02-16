import express from 'express';
import { parameters as ConfigApp } from './config/app.config';
import routes from './routes';
import { boomException } from './middlewares/error.handler';

const app = express();
app.use(express.json());
routes(app);

app.use(boomException);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${ConfigApp.port}`);
});
