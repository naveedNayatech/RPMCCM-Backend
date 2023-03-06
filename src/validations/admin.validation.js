const Joi = require('joi');
const { password } = require('./custom.validation');

const signup = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role : Joi.string()
  }),
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const update = {
  body: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string()
  })
}


module.exports = {
  signup,
  login,
  update
};
