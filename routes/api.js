const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let message = req.query.message;
  if (message === "") {
    res.status(400);
    message = "messageの値が空です";
  }
  res.send({ message });
});

// ブラウザからJSONデータを受け取るための設定
router.use(express.json());

router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});

module.exports = router;
