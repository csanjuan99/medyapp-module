import Joi from 'joi';

export const createUserSchema: Joi.Schema = Joi.object({
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(30).alphanum().required(),
  document_type: Joi.string().required(),
  document_number: Joi.string().required(),
  phone: Joi.string()
});

export const getUserSchema: Joi.Schema = Joi.object({
  id: Joi.number().required()
});

export const updateUserSchema: Joi.Schema = Joi.object({
  name: Joi.string(),
  lastname: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string().min(6).max(30).alphanum(),
  document_type: Joi.string(),
  document_number: Joi.string(),
  phone: Joi.string()
});
