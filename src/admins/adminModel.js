const mongoose = require('mongoose')
const adminSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    role:{
        type:String
    }
})
const adminModel = new mongoose.model('admins',adminSchema);
module.exports ={
    adminModel:adminModel
}