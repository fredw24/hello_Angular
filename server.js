
const bodyParser = require('body-parser');
var express = require('express');

var app = express();
var routes = require('./backend/route')
// configure body-parser to read JSON
app.use(bodyParser.json());

routes(app);


app.use(express.static( __dirname + '/public/dist/public' ));

// where the routes used to be, we're going to require routes.js
// since routes.js exports a function, server.js will receive that function
// invoke the function we get from the require and pass it app as an argument
// require('./backend/route.js')(app)

app.listen(8000,function(){

   console.log("listening on port 8000")
})
