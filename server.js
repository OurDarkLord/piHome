var express = require('express');
var app = express();

var path = require('path');

var http = require('http');

var port = process.env.PORT || 8000;


//the pi part

var Gpio = require('pigpio').Gpio;

let living = new Gpio(2, {mode: Gpio.OUTPUT});
let livingStatus = false;
let tafel = new Gpio(3, {mode: Gpio.OUTPUT});
let tafelStatus = false;
let gang = new Gpio(4, {mode: Gpio.OUTPUT});
let gangStatus = false;
let keuken = new Gpio(5, {mode: Gpio.OUTPUT});
let keukenStatus = false;
let WC = new Gpio(6, {mode: Gpio.OUTPUT});
let WCStatus = false;
let kamer1 = new Gpio(7, {mode: Gpio.OUTPUT});
let kamer1Status = false;
let kamer2 = new Gpio(8, {mode: Gpio.OUTPUT});
let kamer2Status = false;

app.post('/living', (req, res) => {
		livingStatus = !livingStatus;
		living.digitalWrite(livingStatus);
		
	  	res.send(JSON.stringify(update()))
});

app.post('/tafel', (req, res) => {
		tafelStatus = !tafelStatus;
		tafel.digitalWrite(tafelStatus);
		
	  	res.send(JSON.stringify(update()))
});

app.post('/gang', (req, res) => {
		gangStatus = !gangStatus;
		gang.digitalWrite(gangStatus);
		
	  	res.send(JSON.stringify(update()))
});

app.post('/keuken', (req, res) => {
		keukenStatus = !keukenStatus;
		keuken.digitalWrite(keukenStatus);
		
	  	res.send(JSON.stringify(update()))
});

app.post('/WC', (req, res) => {
		WCStatus = !WCStatus;
		WC.digitalWrite(WCStatus);
		
	  	res.send(JSON.stringify(update()))
});

app.post('/kamer1', (req, res) => {
		kamer1Status = !kamer1Status;
		kamer1.digitalWrite(kamer1Status);
		
	  	res.send(JSON.stringify(update()))
});

app.post('/kamer2', (req, res) => {
		kamer2Status = !kamer2Status;
		kamer2.digitalWrite(kamer2Status);
		
	  	res.send(JSON.stringify(update()))
});



function allOut() {
	living.digitalWrite(false);
	kamer.digitalWrite(false);
	keuken.digitalWrite(false);
}



function update() {
	return data = {
		"living" : livingStatus,
		"tafel" : livingStatus,
		"gang" : gangStatus,
		"keuken" : keukenStatus,
		"WC" : WCStatus,
		"kamer1" : kamer1Status,
		"kamer2" : kamer2Status,
	}
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res, next) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

var server = http.createServer(app).listen(port,function () {
	allOut();
	console.log("serving http on port " + port);
});
