const express = require("express");
const { log } = require("console");
const fs = require("fs");
const path = require("path");
const logger = require("morgan");
require("dotenv").config();
const app = express();

app.set("port", process.env.PORT || 4000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));

const Home = require("./routes/home");
const About = require("./routes/about");
const Portfolio = require("./routes/portfolio");
const Contact = require("./routes/contact");

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(
  "/jquery",
  express.static(path.join(__dirname, "/node_modules/jquery"))
);

app.use("/", Home);
app.use("/about", About);
app.use("/portfolio", Portfolio);
app.use("/contact", Contact);

app.listen(app.get("port"), () => {
  log(`Server is running on port ${app.get("port")}`);
});
