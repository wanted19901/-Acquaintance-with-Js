function carStartListener(){

	var randomNumber = Math.random();
	if (randomNumber > 0.5) {
		alert('Car started');

		startButton.classList.add("hide");

		function engineStoped(){
			alert('engine crashed');
		}

		window.setTimeout(engineStoped, 5000);
		alert('We wait stoped'); 

	} else  {
		alert('Somthing wrong');
	}

}

var startButton = document.querySelector("#start-car");
startButton.addEventListener("click", carStartListener);