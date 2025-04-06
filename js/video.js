var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay=false;
	console.log('auto play is set to' + video.autoplay);
	video.loop=false;
	console.log('loop is set to' + video.loop);
	
	const playBTn = document.querySelector("#play");
	const pauseBtn = document.querySelector("#pause");
	const muteBtn = document.querySelector("#mute");
	const slider = document.querySelector("#slider");
	const volumeDisplay = document.querySelector("#volume");
	const slowerBTn = document.querySelector("#slower");
	const fasterBtn = document.querySelector("#faster");
	const vintageBtn = document.querySelector("#vintage");
	const origBtn = document.querySelector("#orig");
	const skipBtn = document.querySelector("#skip");

	video.volume = slider.value/100;
	slider.value = video.volume * 100;
	volumeDisplay.textContent = Math.round(video.volume * 100) + "%";

	playBTn.addEventListener("click", function(){
		video.play();
		console.log("Video is playing");
	});

	pauseBtn.addEventListener("click", function(){
		video.pause();
		console.log("Video is Paused")
	});

	muteBtn.addEventListener("click", function(){
		video.muted = !video.muted;
		muteBtn.textContent = video.muted ? "Unmute" : "Mute";
		console.log("Mute status: " + video.muted);
	});

	slider.addEventListener("input", function(){
		video.volume = slider.value / 100;
		video.muted = false;
		muteBtn.textContent = "Mute";
		volumeDisplay.textContent = slider.value + "%";
		console.log("Volume set to" + video.volume);
	});

	slowerBTn.addEventListener("click", function(){
		video.playbackRate *= 0.9;
		console.log("New playback speed:", video.playbackRate.toFixed(5));

	});

	fasterBtn.addEventListener("click", function(){
		video.playbackRate /= 0.9;
		console.log("New playback speed:", video.playbackRate.toFixed(5));

	});

	skipBtn.addEventListener("click", function(){
		if (video.currentTime += 10 >= video.duration){
			video.currentTime = 0;
			console.log("Reach end, restarting video.");
		}else{
			video.currentTime += 10;
			console.log("Skipped ahead. Current time:", video.currentTime.toFixed(2), "secondss");
			
		}
	});
	vintageBtn.addEventListener("click", function () {
		video.classList.add("oldSchool");
		console.log("Old School style applied");
	});
	origBtn.addEventListener("click", function () {
		video.classList.remove("oldSchool");
		console.log("Original style restored")
	});
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
// used WWschool and some chat for skip ahead help
