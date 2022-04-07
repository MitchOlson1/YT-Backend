require("dotenv").config();
const connectDb = require("./Startup/db");
const express = require("express")
const cors = require("cors");
//const videoValidate = require("./middleware/video-validation")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors())

//GET Video with Search


//GET Related Videos


//GET Comments


//POST Comments


//POST Replies


//PUT Likes


//PUT Dislikes



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running. Listening on PORT: ${PORT}`);
});

