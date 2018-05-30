
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

function showUnSupportedMessage() {
	var user = navigator.userAgent;
	const panel = document.querySelector('#panel');
	console.log(user);

	if (!(/Chrome|Safari|Opera/.test(user))) {
		panel.classList.add("no_supported_message");
		panel.innerHTML = `<h2 class="title">Sorry, 3D panel is not compatible on your browser.<br>
		Use Chrome, Safari or Opera 15+ instead.</h2>`;
	} 
}
showUnSupportedMessage();