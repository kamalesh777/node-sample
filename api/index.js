const express = require("express");
const app = express();


app.use(express.json());

var indexRouter = require("../routes/index");
var aboutRouter = require("../routes/about");

app.use("/", indexRouter);
app.use("/about", aboutRouter);

module.exports = app