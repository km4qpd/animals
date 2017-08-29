function mOver(obj) {
    obj.style.opacity = 1
}

function mOut(obj) {
    obj.style.opacity = .1
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}
function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("slide");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; 1 < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex - 1].style.display = "block";
}
	
