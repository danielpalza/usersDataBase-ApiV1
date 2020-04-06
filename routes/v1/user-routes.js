const express = require('express');

const userControllers = require('../../controllers/user-controllers');

const routes = express.Router();

routes.get('/get-all', userControllers.getAll);
routes.post('/search', userControllers.search);
routes.post('/create', userControllers.createUser);
routes.post('/delete', userControllers.deleteUser);

module.exports = routes;
