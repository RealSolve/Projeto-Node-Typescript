const express = require('express');
const { userController } = require('../controllers');

const userRoute = express.Router();

userRoute.get('/', userController.getUsers);

module.exports = userRoute;