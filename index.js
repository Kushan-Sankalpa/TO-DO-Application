const express = require('express'); // this line import empress framework 
                                    // reqire() node js function that brings express library
                                    
const app = express(); // this is our express application
app.use("/static", express.static("public")); //express.static is a middleware function in express js to help access the static files like images, css from public 
app.set("view engine", "ejs"); //This specifies the template engine to use, in this case ejs.

//set up a route 
app.get('/', (req, res) => { // This tells the app to do something when someone visits the root URL ("/")
                             // req ; repersent the request that came from the visitor
                             // res ; repersent the response that will be sent back to the visitor
res.render('todo.ejs') 
});

//start the server 
app.listen(3000, () => {console.log('Server is running on port 3000')}); //This makes the app listen for visitors on port 3000
                                                                         //console.log(...): Once the server is running, it prints a message in the terminal to let you know it's working.