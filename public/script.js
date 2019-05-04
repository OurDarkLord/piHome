var livingBtn = document.querySelector('.living');
livingBtn.addEventListener('click', living);

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
    if(data.living) {
    	livingBtn.classList.add('on');
    } else {
    	livingBtn.classList.remove('on');
    }
    
  });
}

function living() {
  setButtons(object);
    clickBtn({
      room: 1,
      location: 'living'
    });
}
