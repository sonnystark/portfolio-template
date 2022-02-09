const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.render("main", {
    title: "Home | Sonny Stark",
    content: "home",
  });
});

module.exports = route;
