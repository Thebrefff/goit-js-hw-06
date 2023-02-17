const textSize = document.querySelector('#font-size-control');
const abracadabra = document.querySelector('#text');

textSize.addEventListener('change', event => {
	abracadabra.style.fontSize = `${event.target.value}px`;
});

