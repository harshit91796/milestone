const mongoose = require('mongoose')

const login = new mongoose.Schema({
    username : {
        type :String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true
    },
    email : {
       type : String,
       required : true,
       unique : true,
    }
})

const User = mongoose.model('UserLogan',login)

module.exports = User;