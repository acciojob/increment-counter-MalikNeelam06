//your JS code here. If required.
let button=document.getElementById("incrementBtn");
let para=document.getElementById("counter");
let val=1;
button.addEventListener("click",()=>{
	// val++;
	para.innertext=val;
	val++;
	alert(para);
});