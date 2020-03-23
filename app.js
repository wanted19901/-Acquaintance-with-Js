function carStartListener(){

	var randomNumber = Math.random();
	if (randomNumber > 0.5) {
		console.log('Car started');

		startButton.classList.add("hide");

		function engineStoped(){
			console.log('engine crashed');
		}

		window.setTimeout(engineStoped, 5000);
		console.log('We wait stoped'); 

	} else  {
		console.log('Somthing wrong');
	}

}

var startButton = document.querySelector("#start-car");
startButton.addEventListener("click", carStartListener);