var livingBtn = document.querySelector('.living');
livingBtn.addEventListener('click', living);

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
  fetch('http://localhost:8000/living', {
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
    clickBtn({
      room: 1
    });
}


