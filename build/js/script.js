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

var user = navigator.userAgent;

if (!/Chrome|Safari/.test(user)) {
	var panel = document.querySelector('#panel');
	panel.classList.add("no_supported");
	panel.innerHTML = "<h2 class=\"title\">Use the browser on the Chromium engine like: Chrome, Opera and etc.</h2>";
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLFNBQUEsV0FBQSxHQUF1QjtBQUN0QixLQUFNLFFBQVEsU0FBQSxhQUFBLENBQWQsUUFBYyxDQUFkO0FBQ0EsS0FBTSxTQUFTLFNBQUEsYUFBQSxDQUFmLGlCQUFlLENBQWY7QUFDQSxLQUFNLFNBQVMsU0FBQSxhQUFBLENBQWYsaUJBQWUsQ0FBZjs7QUFFQSxLQUFJLFNBQVM7QUFDWixLQURZLENBQUEsRUFDTixHQUFHO0FBREcsRUFBYjs7QUFJQSxRQUFBLGdCQUFBLENBQUEsT0FBQSxFQUFpQyxVQUFBLENBQUEsRUFBTztBQUN2QyxNQUFJLE1BQU0sRUFBQSxNQUFBLENBQVYsS0FBQTtBQUNBLFNBQUEsQ0FBQSxHQUFBLEdBQUE7O0FBRUEsd0JBQXNCLFlBQU07QUFDM0IsU0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLGFBQUEsR0FBQSxHQUFBLGVBQUEsR0FBc0QsT0FBdEQsQ0FBQSxHQUFBLE1BQUE7QUFERCxHQUFBO0FBSkQsRUFBQTs7QUFTQSxRQUFBLGdCQUFBLENBQUEsT0FBQSxFQUFpQyxVQUFBLENBQUEsRUFBTztBQUN2QyxNQUFJLE1BQU0sRUFBQSxNQUFBLENBQVYsS0FBQTtBQUNBLFNBQUEsQ0FBQSxHQUFBLEdBQUE7O0FBRUEsd0JBQXNCLFlBQU07QUFDM0IsU0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLGFBQW1DLE9BQW5DLENBQUEsR0FBQSxlQUFBLEdBQUEsR0FBQSxHQUFBLE1BQUE7QUFERCxHQUFBO0FBSkQsRUFBQTtBQVFBOztBQUVEOztBQUVBLElBQUksT0FBTyxVQUFYLFNBQUE7O0FBRUEsSUFBSSxDQUFFLGdCQUFBLElBQUEsQ0FBTixJQUFNLENBQU4sRUFBbUM7QUFDbEMsS0FBTSxRQUFRLFNBQUEsYUFBQSxDQUFkLFFBQWMsQ0FBZDtBQUNBLE9BQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxjQUFBO0FBQ0EsT0FBQSxTQUFBLEdBQUEsOEZBQUE7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxyXG5mdW5jdGlvbiByb3RhdGVQYW5lbCgpIHtcclxuXHRjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFuZWxcIik7XHJcblx0Y29uc3QgcmFuZ2VYID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYW5lbF9yb3RhdGVfeFwiKTtcclxuXHRjb25zdCByYW5nZVkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhbmVsX3JvdGF0ZV95XCIpO1xyXG5cclxuXHRsZXQgdmFsdWVzID0ge1xyXG5cdFx0eDogMCwgeTogMFxyXG5cdH1cclxuXHJcblx0cmFuZ2VYLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG5cdFx0bGV0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cdFx0dmFsdWVzLnggPSB2YWw7XHJcblxyXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuXHRcdFx0cGFuZWwuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVgoJHt2YWx9ZGVnKSByb3RhdGVZKCR7dmFsdWVzLnl9ZGVnKWA7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHRcclxuXHRyYW5nZVkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcblx0XHRsZXQgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcblx0XHR2YWx1ZXMueSA9IHZhbDtcclxuXHJcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG5cdFx0XHRwYW5lbC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWCgke3ZhbHVlcy54fWRlZykgcm90YXRlWSgke3ZhbH1kZWcpYDtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5yb3RhdGVQYW5lbCgpO1xyXG5cclxudmFyIHVzZXIgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cclxuaWYgKCEoL0Nocm9tZXxTYWZhcmkvLnRlc3QodXNlcikpKSB7XHJcblx0Y29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFuZWwnKTtcclxuXHRwYW5lbC5jbGFzc0xpc3QuYWRkKFwibm9fc3VwcG9ydGVkXCIpO1xyXG5cdHBhbmVsLmlubmVySFRNTCA9IGA8aDIgY2xhc3M9XCJ0aXRsZVwiPlVzZSB0aGUgYnJvd3NlciBvbiB0aGUgQ2hyb21pdW0gZW5naW5lIGxpa2U6IENocm9tZSwgT3BlcmEgYW5kIGV0Yy48L2gyPmBcclxufSJdfQ==
