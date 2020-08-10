var express = require('express');
var router = express.Router();
var fs = require('fs').promises

/* GET home page. */
router.get('/', function(req, res, next) {
  let path = process.env.FILEPATH;
  readAsJson(path)
  .then(data =>{
    res.send(data)
  })
  .catch(err => {
    console.log(err)
  })
});

module.exports = router;


async function readAsJson(path) {
  let fr = await fs.open(path, 'r');
  let data = await fr.readFile({encoding: 'utf-8'});
  console.log(data);
  await fr.close();
  return JSON.parse(data);
}
