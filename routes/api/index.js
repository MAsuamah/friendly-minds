const router = require('express').Router();
const userRoutes = require('./user-routes');

// add prefix of `/users` to routes created in `users-routes.js`
router.use('/users', userRoutes);

module.exports = router;