

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




function clickBtn(opts) {
  console.log('Posting request to nodeJS');
  fetch('https://', {
    method: 'post',
    body: JSON.stringify(opts)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log('response:', data);
  });
}

function living() {
    clickBtn({
      room: 1
    });
}

var livingBtn = document.querySelector('.living');
livingBtn.addEventListener('click', living);
