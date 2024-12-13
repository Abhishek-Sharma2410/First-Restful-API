let express = require("express");
let app = express();
let port = 8080;
let path = require("path");

app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.render("index.ejs");
})

let posts = [
    {
        username : "Abhishek Sharma",
        content : "Hey I am Learning Node js's Framework Express js"
    },
    {
        username : "Aniket",
        content : "Hey I left TCS due to some location issue"
    },
]

app.get('/posts', (req, res)=>{
    res.render("posts.ejs", {posts});
})

app.get('/post/new', (req, res)=>{
    res.render("new.ejs");
})

app.post('/post', (req, res)=>{
    let {username, content} = req.body;
    posts.push({username, content});
    res.redirect("/posts");
})

app.listen(port, ()=>{
    console.log(`Server is listening at localhost:${port}`);
})