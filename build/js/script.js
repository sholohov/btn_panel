(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var panel = document.querySelector("#panel");

function rotatePanel() {
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

	if (!/Chrome|Safari|Opera/.test(user)) {
		panel.classList.add("no_supported_message");
		panel.innerHTML = "<h2 class=\"title\">Sorry, 3D panel is not compatible on your browser.<br>\n\t\tUse Chrome, Safari or Opera 15+ instead.</h2>";
	}
}
showUnSupportedMessage();

function linkEventCancel() {
	panel.addEventListener("click", function (e) {
		if (e.target.matches('.btn')) {
			e.preventDefault();
		}
	});
}
linkEventCancel();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sUUFBUSxTQUFBLGFBQUEsQ0FBZCxRQUFjLENBQWQ7O0FBRUEsU0FBQSxXQUFBLEdBQXVCO0FBQ3RCLEtBQU0sU0FBUyxTQUFBLGFBQUEsQ0FBZixpQkFBZSxDQUFmO0FBQ0EsS0FBTSxTQUFTLFNBQUEsYUFBQSxDQUFmLGlCQUFlLENBQWY7O0FBRUEsS0FBSSxTQUFTO0FBQ1osS0FEWSxDQUFBLEVBQ04sR0FBRztBQURHLEVBQWI7O0FBSUEsUUFBQSxnQkFBQSxDQUFBLE9BQUEsRUFBaUMsVUFBQSxDQUFBLEVBQU87QUFDdkMsTUFBSSxNQUFNLEVBQUEsTUFBQSxDQUFWLEtBQUE7QUFDQSxTQUFBLENBQUEsR0FBQSxHQUFBOztBQUVBLHdCQUFzQixZQUFNO0FBQzNCLFNBQUEsS0FBQSxDQUFBLFNBQUEsR0FBQSxhQUFBLEdBQUEsR0FBQSxlQUFBLEdBQXNELE9BQXRELENBQUEsR0FBQSxNQUFBO0FBREQsR0FBQTtBQUpELEVBQUE7O0FBU0EsUUFBQSxnQkFBQSxDQUFBLE9BQUEsRUFBaUMsVUFBQSxDQUFBLEVBQU87QUFDdkMsTUFBSSxNQUFNLEVBQUEsTUFBQSxDQUFWLEtBQUE7QUFDQSxTQUFBLENBQUEsR0FBQSxHQUFBOztBQUVBLHdCQUFzQixZQUFNO0FBQzNCLFNBQUEsS0FBQSxDQUFBLFNBQUEsR0FBQSxhQUFtQyxPQUFuQyxDQUFBLEdBQUEsZUFBQSxHQUFBLEdBQUEsR0FBQSxNQUFBO0FBREQsR0FBQTtBQUpELEVBQUE7QUFRQTtBQUNEOztBQUVBLFNBQUEsc0JBQUEsR0FBa0M7QUFDakMsS0FBSSxPQUFPLFVBQVgsU0FBQTs7QUFFQSxLQUFJLENBQUUsc0JBQUEsSUFBQSxDQUFOLElBQU0sQ0FBTixFQUF5QztBQUN4QyxRQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsc0JBQUE7QUFDQSxRQUFBLFNBQUEsR0FBQSwrSEFBQTtBQUVBO0FBQ0Q7QUFDRDs7QUFHQSxTQUFBLGVBQUEsR0FBMkI7QUFDMUIsT0FBQSxnQkFBQSxDQUFBLE9BQUEsRUFBZ0MsVUFBQSxDQUFBLEVBQU87QUFDdEMsTUFBSSxFQUFBLE1BQUEsQ0FBQSxPQUFBLENBQUosTUFBSSxDQUFKLEVBQThCO0FBQzdCLEtBQUEsY0FBQTtBQUNBO0FBSEYsRUFBQTtBQUtBO0FBQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFuZWxcIik7XHJcblxyXG5mdW5jdGlvbiByb3RhdGVQYW5lbCgpIHtcclxuXHRjb25zdCByYW5nZVggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhbmVsX3JvdGF0ZV94XCIpO1xyXG5cdGNvbnN0IHJhbmdlWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFuZWxfcm90YXRlX3lcIik7XHJcblxyXG5cdGxldCB2YWx1ZXMgPSB7XHJcblx0XHR4OiAwLCB5OiAwXHJcblx0fVxyXG5cclxuXHRyYW5nZVguYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcblx0XHRsZXQgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcblx0XHR2YWx1ZXMueCA9IHZhbDtcclxuXHJcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG5cdFx0XHRwYW5lbC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWCgke3ZhbH1kZWcpIHJvdGF0ZVkoJHt2YWx1ZXMueX1kZWcpYDtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cdFxyXG5cdHJhbmdlWS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuXHRcdGxldCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcclxuXHRcdHZhbHVlcy55ID0gdmFsO1xyXG5cclxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcblx0XHRcdHBhbmVsLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVYKCR7dmFsdWVzLnh9ZGVnKSByb3RhdGVZKCR7dmFsfWRlZylgO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxucm90YXRlUGFuZWwoKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dVblN1cHBvcnRlZE1lc3NhZ2UoKSB7XHJcblx0dmFyIHVzZXIgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cclxuXHRpZiAoISgvQ2hyb21lfFNhZmFyaXxPcGVyYS8udGVzdCh1c2VyKSkpIHtcclxuXHRcdHBhbmVsLmNsYXNzTGlzdC5hZGQoXCJub19zdXBwb3J0ZWRfbWVzc2FnZVwiKTtcclxuXHRcdHBhbmVsLmlubmVySFRNTCA9IGA8aDIgY2xhc3M9XCJ0aXRsZVwiPlNvcnJ5LCAzRCBwYW5lbCBpcyBub3QgY29tcGF0aWJsZSBvbiB5b3VyIGJyb3dzZXIuPGJyPlxyXG5cdFx0VXNlIENocm9tZSwgU2FmYXJpIG9yIE9wZXJhIDE1KyBpbnN0ZWFkLjwvaDI+YDtcclxuXHR9IFxyXG59XHJcbnNob3dVblN1cHBvcnRlZE1lc3NhZ2UoKTtcclxuXHJcblxyXG5mdW5jdGlvbiBsaW5rRXZlbnRDYW5jZWwoKSB7XHJcblx0cGFuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcblx0XHRpZiAoZS50YXJnZXQubWF0Y2hlcygnLmJ0bicpKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5saW5rRXZlbnRDYW5jZWwoKTsiXX0=
