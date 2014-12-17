var express = require("express"),
  bodyParser = require("body-parser"),
  app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
// will serve all the files in our public folder
//  without us having to create routes for each of
//  them, static file serving
app.use(express.static(__dirname + "/public"));

// our root route
app.get("/", function (req, res) {
  console.log(req)
  res.render("sites/home", {title: req.url});
});

app.get("/about", function (req, res) {
  res.render("sites/about", {
    title: req.url
  })
});

app.get("/contact", function (req, res) {
  res.render("sites/contact", {
    title: req.url
  })
});

app.listen(3000, function () {
  console.log("\t listening on localhost:3000");
})