const mongoose = require("mongoose");
const Joi = require("joi");

const commentSchema = new mongoose.Schema({
    message: {type:String, required: true, minlength: 2, maxlength:255},
    videoId: {type:String, required: true},
    replies: {[]},    
    dateAdded: {type:Date, default: Date.now()},
    likes: {type:Number,default:0},
    dislikes: {type:Number,default:0}  
});

function validateComment(comment){
    const schema = Joi.object({
        message: Joi:string().required().min(2).max(255),
        videoId: :String, required: true},        
    });
    return schema.validate(comment);
}
