(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function rotatePanel() {
	var panel = document.querySelector("#panel");
	var rangeX = document.querySelector("#panel_rotate_x");
	var rangeY = document.querySelector("#panel_rotate_y");

	var values = {
		x: 0, y: 0
	};

	rangeX.addEventListener("input", function (e) {
		var val = e.target.value;
		values.x = val;

		requestAnimationFrame(function () {
			panel.style.transform = "rotateX(" + val + "deg) rotateY(" + values.y + "deg)";
		});
	});

	rangeY.addEventListener("input", function (e) {
		var val = e.target.value;
		values.y = val;

		requestAnimationFrame(function () {
			panel.style.transform = "rotateX(" + values.x + "deg) rotateY(" + val + "deg)";
		});
	});
}
rotatePanel();

function showUnSupportedMessage() {
	var user = navigator.userAgent;
	var panel = document.querySelector('#panel');
	console.log(user);

	if (!/Chrome|Safari|Opera/.test(user)) {
		panel.classList.add("no_supported_message");
		panel.innerHTML = "<h2 class=\"title\">Sorry, 3D panel is not compatible on your browser.<br>\n\t\tUse Chrome, Safari or Opera 15+ instead.</h2>";
	}
}
showUnSupportedMessage();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLFNBQUEsV0FBQSxHQUF1QjtBQUN0QixLQUFNLFFBQVEsU0FBQSxhQUFBLENBQWQsUUFBYyxDQUFkO0FBQ0EsS0FBTSxTQUFTLFNBQUEsYUFBQSxDQUFmLGlCQUFlLENBQWY7QUFDQSxLQUFNLFNBQVMsU0FBQSxhQUFBLENBQWYsaUJBQWUsQ0FBZjs7QUFFQSxLQUFJLFNBQVM7QUFDWixLQURZLENBQUEsRUFDTixHQUFHO0FBREcsRUFBYjs7QUFJQSxRQUFBLGdCQUFBLENBQUEsT0FBQSxFQUFpQyxVQUFBLENBQUEsRUFBTztBQUN2QyxNQUFJLE1BQU0sRUFBQSxNQUFBLENBQVYsS0FBQTtBQUNBLFNBQUEsQ0FBQSxHQUFBLEdBQUE7O0FBRUEsd0JBQXNCLFlBQU07QUFDM0IsU0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLGFBQUEsR0FBQSxHQUFBLGVBQUEsR0FBc0QsT0FBdEQsQ0FBQSxHQUFBLE1BQUE7QUFERCxHQUFBO0FBSkQsRUFBQTs7QUFTQSxRQUFBLGdCQUFBLENBQUEsT0FBQSxFQUFpQyxVQUFBLENBQUEsRUFBTztBQUN2QyxNQUFJLE1BQU0sRUFBQSxNQUFBLENBQVYsS0FBQTtBQUNBLFNBQUEsQ0FBQSxHQUFBLEdBQUE7O0FBRUEsd0JBQXNCLFlBQU07QUFDM0IsU0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLGFBQW1DLE9BQW5DLENBQUEsR0FBQSxlQUFBLEdBQUEsR0FBQSxHQUFBLE1BQUE7QUFERCxHQUFBO0FBSkQsRUFBQTtBQVFBO0FBQ0Q7O0FBRUEsU0FBQSxzQkFBQSxHQUFrQztBQUNqQyxLQUFJLE9BQU8sVUFBWCxTQUFBO0FBQ0EsS0FBTSxRQUFRLFNBQUEsYUFBQSxDQUFkLFFBQWMsQ0FBZDtBQUNBLFNBQUEsR0FBQSxDQUFBLElBQUE7O0FBRUEsS0FBSSxDQUFFLHNCQUFBLElBQUEsQ0FBTixJQUFNLENBQU4sRUFBeUM7QUFDeEMsUUFBQSxTQUFBLENBQUEsR0FBQSxDQUFBLHNCQUFBO0FBQ0EsUUFBQSxTQUFBLEdBQUEsK0hBQUE7QUFFQTtBQUNEO0FBQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcclxuZnVuY3Rpb24gcm90YXRlUGFuZWwoKSB7XHJcblx0Y29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhbmVsXCIpO1xyXG5cdGNvbnN0IHJhbmdlWCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFuZWxfcm90YXRlX3hcIik7XHJcblx0Y29uc3QgcmFuZ2VZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYW5lbF9yb3RhdGVfeVwiKTtcclxuXHJcblx0bGV0IHZhbHVlcyA9IHtcclxuXHRcdHg6IDAsIHk6IDBcclxuXHR9XHJcblxyXG5cdHJhbmdlWC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuXHRcdGxldCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcclxuXHRcdHZhbHVlcy54ID0gdmFsO1xyXG5cclxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcblx0XHRcdHBhbmVsLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVYKCR7dmFsfWRlZykgcm90YXRlWSgke3ZhbHVlcy55fWRlZylgO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblx0XHJcblx0cmFuZ2VZLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG5cdFx0bGV0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cdFx0dmFsdWVzLnkgPSB2YWw7XHJcblxyXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuXHRcdFx0cGFuZWwuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVgoJHt2YWx1ZXMueH1kZWcpIHJvdGF0ZVkoJHt2YWx9ZGVnKWA7XHJcblx0XHR9KTtcclxuXHR9KTtcclxufVxyXG5yb3RhdGVQYW5lbCgpO1xyXG5cclxuZnVuY3Rpb24gc2hvd1VuU3VwcG9ydGVkTWVzc2FnZSgpIHtcclxuXHR2YXIgdXNlciA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcblx0Y29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFuZWwnKTtcclxuXHRjb25zb2xlLmxvZyh1c2VyKTtcclxuXHJcblx0aWYgKCEoL0Nocm9tZXxTYWZhcml8T3BlcmEvLnRlc3QodXNlcikpKSB7XHJcblx0XHRwYW5lbC5jbGFzc0xpc3QuYWRkKFwibm9fc3VwcG9ydGVkX21lc3NhZ2VcIik7XHJcblx0XHRwYW5lbC5pbm5lckhUTUwgPSBgPGgyIGNsYXNzPVwidGl0bGVcIj5Tb3JyeSwgM0QgcGFuZWwgaXMgbm90IGNvbXBhdGlibGUgb24geW91ciBicm93c2VyLjxicj5cclxuXHRcdFVzZSBDaHJvbWUsIFNhZmFyaSBvciBPcGVyYSAxNSsgaW5zdGVhZC48L2gyPmA7XHJcblx0fSBcclxufVxyXG5zaG93VW5TdXBwb3J0ZWRNZXNzYWdlKCk7Il19
