const express = require('express');
const router = express.Router();
const adminController = require('./adminController');

const adminRouter = express.Router();
adminRouter.get('/', adminController.getAlladmin);
adminRouter.delete('/:id', adminController.deleteadmin);
adminRouter.post('/add', adminController.addadmin);
adminRouter.put('/update/:name', adminController.updateadminName);

router.use('/admin', adminRouter);

module.exports = router;