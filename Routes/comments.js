const { Comment, validateComment } = require("../models/comment");
const express = require("express");
const router = express.Router();

//Endpoints go here

//GET Video with Search

//GET Related Videos


//GET Comments


//POST Comments
router.post("/", async (req, res) => {
    try {
        const { error } = validateComment(req.body);
        if (error) return res.status(400).send(error);

        let newComment = await new Comment(req.body);
        await newComment.save();

        return res.status(201).send(newComment);
    } catch (error) {
        return res.status(500).send(`Internal Server Error: ${error}`);
    }
})

//PUT Replies


//PUT Likes


//PUT Dislikes

module.exports = router;