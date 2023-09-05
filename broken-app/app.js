const express = require("express");
let axios = require("axios");
var app = express();

//Second Bug
app.use(express.json());

//Third Bug
app.post("/", async function (req, res, next) {
  try {
    let results = req.body.developers.map((d) => {
      return axios.get(`https://api.github.com/users/${d}`);
    });
    let fulfilled = await Promise.all(results);

    let out = fulfilled.map((r) => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } catch (err) {
    //First Bug
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message });
});
app.listen(3000);
