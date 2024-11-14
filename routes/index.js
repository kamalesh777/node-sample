var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Index api is working fine" });
});

module.exports = router;
