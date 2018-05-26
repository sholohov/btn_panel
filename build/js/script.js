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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLFNBQUEsV0FBQSxHQUF1QjtBQUN0QixLQUFNLFFBQVEsU0FBQSxhQUFBLENBQWQsUUFBYyxDQUFkO0FBQ0EsS0FBTSxTQUFTLFNBQUEsYUFBQSxDQUFmLGlCQUFlLENBQWY7QUFDQSxLQUFNLFNBQVMsU0FBQSxhQUFBLENBQWYsaUJBQWUsQ0FBZjs7QUFFQSxLQUFJLFNBQVM7QUFDWixLQURZLENBQUEsRUFDTixHQUFHO0FBREcsRUFBYjs7QUFJQSxRQUFBLGdCQUFBLENBQUEsT0FBQSxFQUFpQyxVQUFBLENBQUEsRUFBTztBQUN2QyxNQUFJLE1BQU0sRUFBQSxNQUFBLENBQVYsS0FBQTtBQUNBLFNBQUEsQ0FBQSxHQUFBLEdBQUE7O0FBRUEsd0JBQXNCLFlBQU07QUFDM0IsU0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLGFBQUEsR0FBQSxHQUFBLGVBQUEsR0FBc0QsT0FBdEQsQ0FBQSxHQUFBLE1BQUE7QUFERCxHQUFBO0FBSkQsRUFBQTs7QUFTQSxRQUFBLGdCQUFBLENBQUEsT0FBQSxFQUFpQyxVQUFBLENBQUEsRUFBTztBQUN2QyxNQUFJLE1BQU0sRUFBQSxNQUFBLENBQVYsS0FBQTtBQUNBLFNBQUEsQ0FBQSxHQUFBLEdBQUE7O0FBRUEsd0JBQXNCLFlBQU07QUFDM0IsU0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLGFBQW1DLE9BQW5DLENBQUEsR0FBQSxlQUFBLEdBQUEsR0FBQSxHQUFBLE1BQUE7QUFERCxHQUFBO0FBSkQsRUFBQTtBQVFBOztBQUVEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXHJcbmZ1bmN0aW9uIHJvdGF0ZVBhbmVsKCkge1xyXG5cdGNvbnN0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYW5lbFwiKTtcclxuXHRjb25zdCByYW5nZVggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhbmVsX3JvdGF0ZV94XCIpO1xyXG5cdGNvbnN0IHJhbmdlWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFuZWxfcm90YXRlX3lcIik7XHJcblxyXG5cdGxldCB2YWx1ZXMgPSB7XHJcblx0XHR4OiAwLCB5OiAwXHJcblx0fVxyXG5cclxuXHRyYW5nZVguYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcblx0XHRsZXQgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcblx0XHR2YWx1ZXMueCA9IHZhbDtcclxuXHJcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG5cdFx0XHRwYW5lbC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWCgke3ZhbH1kZWcpIHJvdGF0ZVkoJHt2YWx1ZXMueX1kZWcpYDtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cdFxyXG5cdHJhbmdlWS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuXHRcdGxldCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcclxuXHRcdHZhbHVlcy55ID0gdmFsO1xyXG5cclxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcblx0XHRcdHBhbmVsLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVYKCR7dmFsdWVzLnh9ZGVnKSByb3RhdGVZKCR7dmFsfWRlZylgO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcbnJvdGF0ZVBhbmVsKCk7Il19
