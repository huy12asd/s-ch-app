const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const adminRouter = require('./src/admins/adminRouter');
const userRouter = require('./src/users/userRouter');
// const userRouter = require('./src/users/userRouter');

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', adminRouter);
app.use('/', userRouter);
// app.use('/', userRouter);


mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb+srv://legiahuy124578:huydz123456789@huy.0r5j3uq.mongodb.net/Administrators")
 app.use('/admin', adminRouter);
 app.use('/user', userRouter)
// app.use('/user',userRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});