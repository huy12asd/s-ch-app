const mongoose = require('mongoose')
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    brorowingRecords:{
        type:mongoose.Schema.Types.ObjectId
    },
    email:{
        type:String
    },
    fines:{
        type:mongoose.Schema.Types.ObjectId,
    },
    fullName:{
        type:String
    },
    role:{
        type:String
    }
})
const userModel = new mongoose.model('users',userSchema);
module.exports ={
    userModel:userModel
}