var express    = require('express');       
var app        = express();                
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

var port = 3000;        

// ROUTES FOR OUR API
// =============================================================================

var router = express.Router();           
var alive_router = express.Router();           

// A simple  route like this can be used by load balancers 
alive_router.get('/', function(req, res) {
    res.sendStatus(200);
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// This route catches POST to <server ip>:3000/api/sms_dlr_receiver
router.post('/sms_dlr_receiver', function(req, res) {

    // Here we are just printing the request as a placeholder 
    console.log(req.body)

});


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);
app.use('/', alive_router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
