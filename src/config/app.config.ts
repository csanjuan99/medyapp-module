import dotenv from 'dotenv';
dotenv.config();

export const parameters = {
  host: process.env.HOST,
  port: process.env.PORT
};
