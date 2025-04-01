const express = require('express'); // this line import empress framework 
                                    // reqire() node js function that brings express library                                   
const app = express(); // this is our express application
const dotenv = require("dotenv"); // this line import dotenv library
const mongoose = require("mongoose"); // this line import mongoose library
const TodoTask = require("./models/TodoTask"); // this line import TodoTask model from models folder

dotenv.config();// this line loads environment variables from a .env file into process.env



app.use(express.urlencoded({ extended: true })); //express.urlencoded({ extended: true }) tells your app to look for form data in the request body.
                                                    //reads the data from html form and makes it available in req.body.
app.use(express.json()); //express.json() is a middleware function that parses incoming JSON requests and puts the parsed data in req.body.
                         // 


app.use("/static", express.static("public")); //express.static is a middleware function in express js to help access the static files like images, css from public

//db connection
mongoose.connect(process.env.DB_CONNECT) // connnect to my mongodb database using DB_VONNECT in env file 
    .then(() => {
        console.log("Connected to db!"); // if gthe conncetion successful then this message will be shown in the terminal   
        app.listen(3000, () => console.log("Server Up and running")); // after that start the server on port 3000
})
.catch((err) => { console.error(err); }); // cathc error if there is any 

app.set("view engine", "ejs"); //This specifies the template engine to use, in this case ejs.

//set up a get route 
app.get('/', (req, res) => { // This tells the app to do something when someone visits the root URL ("/")
    res.render('todo.ejs')   // req ; repersent the request that came from the visitor
                             // res ; repersent the response that will be sent back to the visitor
     // render is a function that convert the ejs file into html and send it to vistor for display 
     // when i visit locolhjost 3000 then tyhis shows the todojs 
 });

// when user send the form data using post method to the ropot url or request body the data is store itr in req.body it happens from line 12  (express.encoded))
 app.post('/', async (req, res) => { // asyn mena that function can do asynchronous function like save data to database
    const todoTask = new TodoTask({ // create new task using todo task  
        content: req.body.content // extract the data in req.body and store it in content
    });
    try {
        await todoTask.save(); //save the data to data bsse using todo task  to mongo db db
                               // await is used wait until data save operation completes
        res.redirect("/"); // if the task is complete the riderct  to the home page 
    } catch (err) {
        res.status(500).send(err);
        res.redirect("/");
    }
    }); //This code sets up a POST route at the root URL ("/"). When a form is submitted, it creates a new TodoTask object with the content from the form and saves it to the database. If successful, it redirects back to the root URL. If there's an error, it sends a 500 status and redirects back to the root URL.

//start the server 
app.listen(3000, () => {console.log('Server is running on port 3000')}); //This makes the app listen for visitors on port 3000
                                                                         //console.log(...): Once the server is running, it prints a message in the terminal to let you know it's working.