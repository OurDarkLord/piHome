var express = require('express');
var app = express();

var path = require('path');

var http = require('http');

var port = process.env.PORT || 8000;


//the pi part

var Gpio = require('pigpio').Gpio;

let living = new Gpio(2, {mode: Gpio.OUTPUT});
let livingStatus = false;

let kamer = new Gpio(3, {mode: Gpio.OUTPUT});
let kamerStatus = false;

let keuken = new Gpio(4, {mode: Gpio.OUTPUT});
let keukenStatus = false;

function allOut() {
	living.digitalWrite(false);
	kamer.digitalWrite(false);
	keuken.digitalWrite(false);
}

function update() {
	return data = {
		"living" : livingStatus,
		"kamer" : keukenStatus,
		"keuken" : keukenStatus
	}
}

app.post('/living', (req, res) => {
		livingStatus = !livingStatus;
		living.digitalWrite(livingStatus);
		
	  	res.send(JSON.stringify(update()))
});


app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res, next) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

var server = http.createServer(app).listen(port,function () {
	allOut();
	console.log("serving http on port " + port);
});
