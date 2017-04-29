var timer = null;
var countDown = 10;

var changeState = function (state) {
	document.body.className = 'state' + state;
	clearInterval(timer);
	countDown = 10;

	if(state == 2) {
		document.getElementById('countdown').innerHTML = countDown;
		timer = setInterval(function () {
			document.getElementById('countdown').innerHTML = --countDown;
			
			if(countDown <= 0 ) {
				changeState(3);
				clearInterval(timer);
			}
		}, 200);
	} else if (state == 3) {
		var success = setTimeout(function () {
			var randomNumber = Math.round(Math.random()*10);

			console.log(randomNumber);

			if (randomNumber > 5) { //success
				changeState(4);
			} else {
				changeState(5);
			}

		}, 2000);
	}
};