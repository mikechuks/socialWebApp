const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const multer = require("multer");
const path = require("path");

dotenv.config()
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("connected to Databasee")
});

app.use("/images", express.static(path.join(__dirname, "public/images")))

//middleware
/*
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "public/images");
    },
    filename:(req, file, cb)=>{
      cb(null, req.body.name);
    }
})
const upload = multer({storage});
app.post("/api/upload", upload.single("file"), (req, res)=> {
 try{
    return res.status(200).json("File uploaded sucessfully")
 }catch(err){
     console.log(err);
 }
})
*/
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);



app.listen(8800, ()=>{
console.log("Backend Sever is ready!!!")
});
