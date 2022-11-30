var express = require('express');

const juice_controlers= require('../controllers/juice'); 

var router = express.Router();
// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/', juice_controlers.juice_view_all_Page );  
router.get('/detail', juice_controlers.juice_view_one_Page); 
router.get('/create',secured, juice_controlers.juice_create_Page); 
router.get('/update',secured, juice_controlers.juice_update_Page); 
/* GET delete juice page */ 
router.get('/delete',secured, juice_controlers.juice_delete_Page); 
 
module.exports = router;
