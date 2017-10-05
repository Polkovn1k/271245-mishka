/* ----------MODAL */
var specialLink = document.querySelector(".button--special");
var modal =  document.querySelector(".modal");
var modalClose = document.querySelector(".modal__close");

specialLink.addEventListener("click", function(event) {
	event.preventDefault();
	modal.classList.add("modal--show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		modal.classList.remove("modal--show");
	}
});

modalClose.addEventListener("click", function(event) {
	event.preventDefault();
	modal.classList.remove("modal--show");
});
