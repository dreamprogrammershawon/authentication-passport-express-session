const monggose = require('mongoose');

const userSchema = monggose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
});

const User = monggose.model("User",userSchema);

module.exports = User;