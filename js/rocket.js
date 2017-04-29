var timer = null;
var countDown = 10;

var changeState = function (state) {
	document.body.className = 'state' + state;
	clearInterval(timer);

	if(state == 2) {
		timer = setInterval(function () {
			document.getElementById('countdown').innerHTML = countDown--;
			
			if(countDown <= 0 ) {
				changeState(3);
				clearInterval(timer);
			}
		}, 200);
	};
};