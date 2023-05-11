window.addEventListener('load', () => {

	const cell = document.querySelectorAll('.item');
	const bubbles = document.querySelector('.bubbles');
	const s1 = new Audio('./sounds/confetti.mp3');
	const s5 = new Audio('./sounds/glimmer.mp3');
	const s3 = new Audio('./sounds/bubbles.mp3');
	const s4 = new Audio('./sounds/moon.mp3');
	const s2 = new Audio('./sounds/clay.mp3');
	const s6 = new Audio('./sounds/ufo.mp3');
	const colors = [
		'#A6D0DD',
		'#FF6969',
		'#FFD3B0',
		'#FFF8DE',
		'#D6E8DB',
		'#C1D0B5',
	];


	// playSound function palys the appropriate sound for each cell
	const playSound = (soundId) => {
		switch(soundId) {
			case ('s1'): {
				s1.currentTime = 0
				s1.play();
				break;
			} case ('s2'): {
				s2.currentTime = 0
				s2.play();
				break;
			} case ('s3'): {
				s3.currentTime = 0
				s3.play();
				break;
			} case ('s4'): {
				s4.currentTime = 0
				s4.play();
				break;
			} case ('s5'): {
				s5.currentTime = 0
				s5.play();
				break;
			} case ('s6'): {
				s6.currentTime = 0
				s6.play();
				break;
			}
			
		}
	}

	// Create a function that makes bubbles
	const createBubbles = (index) => {
		const bubble = document.createElement('div');
		bubbles.appendChild(bubble);
		bubble.style.backgroundColor = colors[index];
		bubble.style.animation = 'jump 1.4s ease';
		bubble.addEventListener('animationend', function() {
			bubbles.removeChild(this);
		})

	}

	cell.forEach((e, i) => {
		e.addEventListener('click', () => {
			playSound(e.id);
			createBubbles(i);
		});
	})
})
