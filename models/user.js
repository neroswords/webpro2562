const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

let UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    image : String,
    firstname : String,
    lastname : String,
    alias : String,
    email : String,
    gender : String,
    number : String,
    birth_day : Date,
    class : String,
    status : String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);