import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const posts=[];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))


app.get("/addPost",(req,res)=>{
    res.render("add.ejs")
})

app.get("/readPost/:id",(req,res)=>{
    console.log(req.body)
    console.log(req.params.id);
    let selectedPost=req.params.id;
    res.render("post.ejs",{selectedPost:posts[selectedPost]});
})

app.get("/updatePost",(req,res)=>{
    res.send("Update Post")
})

app.get("/deletePost/:id",(req,res)=>{
    let deletedItem=req.params.id;
    const filteredArray = posts.filter((element,i)=>i!==deletedItem);
    console.log(deletedItem,filteredArray);
    res.render("index.ejs",{posts:posts});
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


