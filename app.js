const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

var ToDoItem = "";
var ToDoItems = [];

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {

var day = date.getdate();
  res.render("list", {
    headTitle: day,
    newListItems: ToDoItems
  });

})

app.post("/", function(req, res) {
  ToDoItem = req.body.listItems;
  // console.log(req.body);
  if (req.body.list === "Work") {
    workItems.push(ToDoItem);
    res.redirect("/work");
  } else {
    ToDoItems.push(ToDoItem);
    res.redirect("/");
  }

})

app.get("/about", function(req, res) {
  res.render("about");
})


app.listen(3000, function() {
  console.log("server is up and running at port:3000");
})
