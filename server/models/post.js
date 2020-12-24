const { compare } = require('bcryptjs');
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;



const postSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true,
    },
    body :{
        type : String,
        required : true,
    },
    photo :{
        type : String,
        required:true,
    },
    //here we are building relation between schema
    postedBy :{
        type : ObjectId,
        ref:"User"
    }
})

mongoose.model("Post",postSchema)