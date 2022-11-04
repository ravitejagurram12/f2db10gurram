var express = require('express');
var router = express.Router();



module.exports = router;
router.get('/', function(req, res, next) {
    let query = req.query
    console.log(`rows ${query.rows}`)
    console.log(`cols ${query.cols}`)
    res.render('gridbuild', { title: 'Grid Build' ,query:query});
  });