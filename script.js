//your JS code here. If required.
let button=document.getElementById("incrementBtn");
let para=document.getElementById("counter")[0];
let val=0;
button.addEventListener("click",()=>{
	val++;
	para.innertext=val;
	
	alert(para);
});