const express = require('express'); // this line import empress framework 
                                    // reqire() node js function that brings express library
                                    
const app = express(); // this is our express application
app.use(express.urlencoded({ extended: true })); //express.urlencoded({ extended: true }) tells your app to look for form data in the request body.
                                                    //reads the data from html form and makes it available in req.body.
app.use(express.json()); //express.json() is a middleware function that parses incoming JSON requests and puts the parsed data in req.body.
                         // 


app.use("/static", express.static("public")); //express.static is a middleware function in express js to help access the static files like images, css from public 
app.set("view engine", "ejs"); //This specifies the template engine to use, in this case ejs.

//set up a route 
app.get('/', (req, res) => { // This tells the app to do something when someone visits the root URL ("/")
    res.render('todo.ejs')   // req ; repersent the request that came from the visitor
                             // res ; repersent the response that will be sent back to the visitor
     // render is a function that convert the ejs file into html and send it to vistor for display 
     // when i visit locolhjost 3000 then tyhis shows the todojs 
 });


app.post('/', (req, res) => { // This tells the app to do something when someone submits a form to the root URL ("/")
    console.log(req.body); //shows the form data in terminal 
});


//start the server 
app.listen(3000, () => {console.log('Server is running on port 3000')}); //This makes the app listen for visitors on port 3000
                                                                         //console.log(...): Once the server is running, it prints a message in the terminal to let you know it's working.