const userRoutes = require('./user-routes');

module.exports = (app) => {
  app.use('/api/v1/person', userRoutes);
};
