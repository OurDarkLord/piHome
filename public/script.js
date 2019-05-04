var livingBtn = document.querySelector('.living');
livingBtn.addEventListener('click', buttonPress(living);

var tafelBtn = document.querySelector('.tafel');
tafelBtn.addEventListener('click', buttonPress(tafel));

var gangBtn = document.querySelector('.gang');
gangBtn.addEventListener('click', buttonPress(gang));

var keukenBtn = document.querySelector('.keuken');
keukenBtn.addEventListener('click', buttonPress(keuken));

var WCBtn = document.querySelector('.WC');
WCBtn.addEventListener('click', buttonPress(WC));

var kamer1Btn = document.querySelector('.kamer1');
kamer1Btn.addEventListener('click', buttonPress(kamer1));

var kamer2Btn = document.querySelector('.kamer2');
kamer2Btn.addEventListener('click', buttonPress(kamer2));

function setButtons(obj) {

  for(var loc in obj) {

    if(object[loc]) {
      document.querySelector('.'+ loc).classList.add("on");
    } else {
      document.querySelector('.' + loc).classList.remove("on");
    }

  }

}




var object = {
  living: true,
  keuken: false,
  kamer: true
}



function getAllStates() {
	console.log('getting all states');
	fetch('https://', {
	    method: 'post',
	    body: JSON.stringify(opts)
	}).then(function(response) {
	    return response.json();
	}).then(function(data) {
	    console.log('response:', data);
	});
}

function sendPost(opts) {
  console.log('Posting request to nodeJS');
  fetch('http://localhost:8000/' + opts.location , {
    method: 'post',
    body: JSON.stringify(opts)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log('response:', data);
    setButtons(data);
    
  });
}

function buttonPress(loc) {
  setButtons(object);
    sendPost({
      location: loc
    });
}

