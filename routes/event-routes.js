const express = require("express");


const router = express.Router();
/* 
    Here is your routes
*/
// Route to home events page
router.get('/', (req,res) => {
    res.render('event/index')
})

// Route to single event
router.get('/:id', (req,res) => {
    res.render('event/show')
})

//

module.exports = router ;
