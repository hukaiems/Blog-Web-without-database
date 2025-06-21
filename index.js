import express, { urlencoded } from "express";

const app = express();
const port = 3000;

// middleware
app.use(express.static("public")); //for stylesheets
// turn url encoded format like +, %40 into JS object
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

// create the post first
app.get("/create", (req, res) => {
  res.render("postCreation.ejs");
});

app.post("/create", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  posts.push({ title, content });
  res.redirect("/"); // if dont redirect but res.render then it still in the same url and the code is ugly
});

// router to update
app.get("/update/:index", (req, res) => {
  // to take it out from the req params then pass into url
  const index = req.params.index;
  const post = posts[index];
  res.render("postUpdate.ejs", {
    index: index,
    title: post.title,
    content: post.content,
  });
});
// hanlde update logic
app.post("/update", (req, res) => {
  const index = req.body.index;
  posts[index] = { title: req.body.title, content: req.body.content };

  res.redirect("/");
});

// handle delete
app.post("/delete", (req, res) => {
  const delPost = req.body.index;

  // remove the items at the given position
  posts.splice(delPost, 1);
  res.redirect("/");
});

app.listen(port, () => {
  //it use callback function
  console.log("Listening on port: ", port);
});

const posts = [
  {
    title: "Welcome to My Blog",
    content:
      "Hey there! This is my very first blog post built with Node.js and EJS. Exciting stuff ahead!",
  },
  {
    title: "Why I Love Express.js",
    content:
      "Express makes backend development stupid simple. Routing, middleware, and server setup? All smooth AF.",
  },
  {
    title: "How EJS Works (and Why It’s Cool)",
    content:
      "EJS lets you write HTML with embedded JavaScript. Super helpful for rendering dynamic stuff without React or Vue.",
  },
];
