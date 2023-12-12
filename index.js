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
    let selectedPostId=req.params.id;
    res.render("post.ejs",{selectedPost:posts[selectedPostId],id:selectedPostId});
})

app.get("/updatePost/:id",(req,res)=>{
    let selectedPostId=req.params.id;
    res.render("update.ejs",{id:selectedPostId})
})

app.get("/deletePost/:id",(req,res)=>{
    let deletedItem=req.params.id;
    posts.splice(deletedItem,1);
    res.redirect("/");
})

app.post("/submit",(req,res)=>{
    const latestContent=req.body.postContent;
    posts.push(latestContent);
    res.redirect("/");
})

app.post("/edit/:id",(req,res)=>{
    const editContent=req.body.postContent;
    const editId=req.params.id;
    posts[editId]=editContent;
    res.redirect("/");
})


app.get("/post",(req,res)=>{
    res.render("post.ejs");
})

app.get("/",(req,res)=>{
    res.render("index.ejs",{posts:posts});
})

app.listen(port,(req,res)=>{
    console.log("Listening at 3000");
})


