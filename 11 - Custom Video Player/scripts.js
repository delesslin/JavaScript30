// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build functions
  function togglePlay(){
		if(video.paused){
			video.play();
		}else{
			video.pause();
		}
	}

	function updateButton(){
		const icon = this.paused ? '►' : '❚ ❚';
		toggle.textContent = icon;
	}

	function skip(){
		video.currentTime += parseFloat(this.dataset.skip);
		console.log(this.dataset.skip);
	}

// Hookup event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

skipButtons.forEach(button => button.addEventListener("click", skip));
