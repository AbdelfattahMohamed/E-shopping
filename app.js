const express = require("express");
const app = express();

// Bring EJS Template
app.set('view engine','ejs')
//_________________To See publc folder in repo 
//Bring Static
app.use(express.static('public'))
app.use(express.static('node_modules'))
//__________________

app.get('/' , (req,res) => {
    res.send("IT'S WORKING");
});

// bring events routes

//const events = require('./routes/event-routes')
//app.use('/events', events)
const events = require('./routes/event-routes.js');
app.use('/events',events);



//listen to port
app.listen(3000, () =>{
    console.log("port 3000");
})
