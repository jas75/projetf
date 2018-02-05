// Express JS
const express = require('express');
const app = express();
const router = express.Router();

// Environement
const port = process.env.PORT || 8080;

// Utils
const http = require('http')
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const server = http.createServer(app)


// Activate middleware
app.use(cors({
    origin:'http://localhost:4200',
    credentials:true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb'}));

app.use(express.static(__dirname + '/../client/dist'));

// Routes
app.get('*', function(req,res){
   res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
});


app.listen(port, function(){
   console.log("Listening on port " + port);
});