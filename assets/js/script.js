let pic1 = document.getElementById("pic1");

let taiwan = document.getElementsByClassName("taiwan");
let hk = document.getElementsByClassName("hk");
let chai = document.getElementsByClassName("chai");

let click = document.getElementById("click")
let click1 = document.getElementById("click1")

pic1.onclick = function() {
	
	for (let i=0; i<taiwan.length; i++){
		taiwan[i].style.display="block";}

	for (let i=0; i<hk.length; i++){
		hk[i].style.display="none";}

	for (let i=0; i<chai.length; i++){
		chai[i].style.display="none";}

	pic1.style.backgroundColor = "#C2EB72";
	pic2.style.backgroundColor = "white";
	pic3.style.backgroundColor = "white";

	click.style.display="none";
};

let pic2 = document.getElementById("pic2");

pic2.onclick = function() {
	for (let i=0; i<taiwan.length; i++){
		taiwan[i].style.display="none";}

	for (let i=0; i<hk.length; i++){
		hk[i].style.display="block";}

	for (let i=0; i<chai.length; i++){
		chai[i].style.display="none";}

	pic1.style.backgroundColor = "white";
	pic2.style.backgroundColor = "#C2EB72";
	pic3.style.backgroundColor = "white";

	click.style.display="none";
};

let pic3 = document.getElementById("pic3");

pic3.onclick = function() {
	for (let i=0; i<taiwan.length; i++){
		taiwan[i].style.display="none";}

	for (let i=0; i<hk.length; i++){
		hk[i].style.display="none";}

	for (let i=0; i<chai.length; i++){
		chai[i].style.display="block";}

	pic1.style.backgroundColor = "white";
	pic2.style.backgroundColor = "white";
	pic3.style.backgroundColor = "#C2EB72";

	click.style.display="none";
};

let logo1 = document.getElementById("logo1");
let logo2 = document.getElementById("logo2");
let logo3 = document.getElementById("logo3");
let logo4 = document.getElementById("logo4");
let logo5= document.getElementById("logo5");

let recrow1 = document.getElementsByClassName("recrow1");
let recrow2 = document.getElementsByClassName("recrow2");

let bobaguys = document.getElementsByClassName("bobaguys");
let asha = document.getElementsByClassName("asha");
let urban = document.getElementsByClassName("urban");
let chaicart = document.getElementsByClassName("chaicart");
let littlesweet = document.getElementsByClassName("littlesweet");

logo1.onclick = function() {	

	for (let i=0; i<bobaguys.length; i++){
		bobaguys[i].style.display="block";}
	for (let i=0; i<asha.length; i++){
		asha[i].style.display="none";}
	for (let i=0; i<urban.length; i++){
		urban[i].style.display="none";}
	for (let i=0; i<chaicart.length; i++){
		chaicart[i].style.display="none";}
	for (let i=0; i<littlesweet.length; i++){
		littlesweet[i].style.display="none";}

	click1.style.display="none";
};

logo2.onclick = function() {	

	for (let i=0; i<bobaguys.length; i++){
		bobaguys[i].style.display="none";}
	for (let i=0; i<asha.length; i++){
		asha[i].style.display="block";}
	for (let i=0; i<urban.length; i++){
		urban[i].style.display="none";}
	for (let i=0; i<chaicart.length; i++){
		chaicart[i].style.display="none";}
	for (let i=0; i<littlesweet.length; i++){
		littlesweet[i].style.display="none";}

	click1.style.display="none";
};

logo3.onclick = function() {	

	for (let i=0; i<bobaguys.length; i++){
		bobaguys[i].style.display="none";}
	for (let i=0; i<asha.length; i++){
		asha[i].style.display="none";}
	for (let i=0; i<urban.length; i++){
		urban[i].style.display="block";}
	for (let i=0; i<chaicart.length; i++){
		chaicart[i].style.display="none";}
	for (let i=0; i<littlesweet.length; i++){
		littlesweet[i].style.display="none";}
};
logo4.onclick = function() {	

	for (let i=0; i<bobaguys.length; i++){
		bobaguys[i].style.display="none";}
	for (let i=0; i<asha.length; i++){
		asha[i].style.display="none";}
	for (let i=0; i<urban.length; i++){
		urban[i].style.display="none";}
	for (let i=0; i<chaicart.length; i++){
		chaicart[i].style.display="block";}
	for (let i=0; i<littlesweet.length; i++){
		littlesweet[i].style.display="none";}

	click1.style.display="none";
};
logo5.onclick = function() {	

	for (let i=0; i<bobaguys.length; i++){
		bobaguys[i].style.display="none";}
	for (let i=0; i<asha.length; i++){
		asha[i].style.display="none";}
	for (let i=0; i<urban.length; i++){
		urban[i].style.display="none";}
	for (let i=0; i<chaicart.length; i++){
		chaicart[i].style.display="none";}
	for (let i=0; i<littlesweet.length; i++){
		littlesweet[i].style.display="block";}

	click1.style.display="none";
};