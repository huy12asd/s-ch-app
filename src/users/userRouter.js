const express = require('express');
const router = express.Router();
const userController = require('./userController');

const userRouter = express.Router();
userRouter.get('/', userController.getAlluser);
userRouter.delete('/:id', userController.deleteuser);
userRouter.post('/add', userController.adduser);
userRouter.put('/update/:name', userController.updateuserName);

router.use('/user', userRouter);

module.exports = router;