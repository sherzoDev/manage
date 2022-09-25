var elSiteheaderToggleBtn = document.querySelector(".boton");
var elHeader = document.querySelector(".nav");
var elsiteNav = document.querySelector(".none");
var paq = document.querySelector(".kiks");
var paqone = document.querySelector(".kiks-one");

var bosx = document.querySelector(".boton-one");

elSiteheaderToggleBtn.addEventListener("click", function () {
  elHeader.classList.toggle("navbarbtn");
  elsiteNav.classList.toggle("navbarbtn");
  elsiteNav.classList.remove("none");
  paq.classList.toggle("none");
});
bosx.addEventListener("click", function () {
  elHeader.classList.remove("navbarbtn");
  paqone.classList.toggle("none");
  paq.classList.remove("none");
});
