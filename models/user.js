const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        match: /^\S+@\S+\.\S+$/
    },
    password:{
        type:String,
        required:true
    },
    limit:{
        type:Number,
        required:true
    }
    
});
module.exports = mongoose.model('userdata',userSchema)
