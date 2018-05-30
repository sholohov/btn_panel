
function rotatePanel() {
	const panel = document.querySelector("#panel");
	const rangeX = document.querySelector("#panel_rotate_x");
	const rangeY = document.querySelector("#panel_rotate_y");

	let values = {
		x: 0, y: 0
	}

	rangeX.addEventListener("input", (e) => {
		let val = e.target.value;
		values.x = val;

		requestAnimationFrame(() => {
			panel.style.transform = `rotateX(${val}deg) rotateY(${values.y}deg)`;
		});
	});
	
	rangeY.addEventListener("input", (e) => {
		let val = e.target.value;
		values.y = val;

		requestAnimationFrame(() => {
			panel.style.transform = `rotateX(${values.x}deg) rotateY(${val}deg)`;
		});
	});
}

rotatePanel();

var user = navigator.userAgent;

if (!(/Chrome|Safari/.test(user))) {
	const panel = document.querySelector('#panel');
	panel.classList.add("no_supported");
	panel.innerHTML = `<h2 class="title">Use the browser on the Chromium engine like: Chrome, Opera and etc.</h2>`
}