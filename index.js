const express = require('express'); // this line import empress framework 
                                    // reqire() node js function that brings express library
const app = express(); // this is our express application


//set up a route 
app.get('/', (req, res) => { // This tells the app to do something when someone visits the root URL ("/")
    res.send('Hello World!');
});

//start the server 
app.listen(3000, () => {console.log('Server is running on port 3000')}); //This makes the app listen for visitors on port 3000
                                                                         //console.log(...): Once the server is running, it prints a message in the terminal to let you know it's working.