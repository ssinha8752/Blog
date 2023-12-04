import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const posts=["First Post"];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))


app.get("/addPost",(req,res)=>{
    res.render("Add.ejs")
})

app.get("/readPost",(req,res)=>{
    res.send("Read Post")
})

app.get("/updatePost",(req,res)=>{
    res.send("Update Post")
})

app.get("/deletePost",(req,res)=>{
    res.send("Delete Post")
})

app.post("/submit",(req,res)=>{
    const latestContent=req.body.postContent;
    posts.push(latestContent);
    console.log(posts);
    res.render("index.ejs",{posts:posts});

})

app.get("/post",(req,res)=>{
    res.render("post.ejs");
})

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.listen(port,(req,res)=>{
    console.log("Listening at 3000");
})


