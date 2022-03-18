var express = require('express');
var app = express();
const router = express.Router();
var cors = require('cors');
app.use(cors());
const bodyParser = require("body-parser");
const game = require("./montyHall.js")
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/handle', async (req, res) => {
  try {
    const { number, toSwitch } = req.body;
    const result = await game(number,toSwitch)
    res.json(result);
  } catch (err) {
    res.status(400).send("Something wrong!");
  }
  });

app.use("/", router);
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});