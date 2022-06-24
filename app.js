
const avitar = document.querySelector('#player')
const coin = document.querySelector('#coin')
// moveCoin()


function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}


window.addEventListener('keyup', function(e){
	const currentTop = extractPos(avitar.style.top)
	const currentLeft = extractPos(avitar.style.left)

	if (e.key ==='ArrowUp'){
		avitar.style.top = `${currentTop -50}px`
	}

	if (e.key ==='ArrowDown'){
		avitar.style.top = `${currentTop +50}px`
	}
	if (e.key ==='ArrowRight'){
		avitar.style.left = `${currentLeft +50}px`
		avitar.style.transform = 'scale(1,1)'
	}
	if (e.key ==='ArrowLeft'){
		avitar.style.left = `${currentLeft -50}px`
		avitar.style.transform = 'scale(-1,1)'
	}
	if (isTouching(avitar, coin)){
		moveCoin()
	}

})

const extractPos = (pos) => {
	if (!pos) return 0
	return parseInt(pos.slice(0,-2))
}

const moveCoin = () => {
	const y = Math.floor(Math.random() * window.innerWidth)
	const x = Math.floor(Math.random() * window.innerHeight)
	coin.style.top = `${y}px`
	coin.style.left = `${x}px`
}
