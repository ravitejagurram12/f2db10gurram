var express = require('express');

const juice_controlers= require('../controllers/juice'); 

var router = express.Router();

/* GET home page. */
router.get('/', juice_controlers.juice_view_all_Page );  
 

module.exports = router;
