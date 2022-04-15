
const buttons = document.querySelectorAll("#li");
const section =document.querySelectorAll(".thumb");
buttons.forEach(item =>{
 item.addEventListener('click', ()=>{
  buttons.forEach(item => {
   item.className = "";
  });
  item.className = "active";
  // show images
  let values = item.textContent;
  section.forEach(show =>{
   show.style.display = "none";
   if(show.getAttribute("data-id") === values || values === "all"){
    show.style.display = "block";
   }
  })
 })
})


function showDialog1(){
document.getElementById("overlay").style.display = "block";
document.getElementById("dialog1").style.display = "block";
}
function hideDialog1(){
document.getElementById("overlay").style.display = "none";
document.getElementById("dialog1").style.display = "none";
}
function showDialog2(){
 document.getElementById("overlay").style.display = "block";
 document.getElementById("dialog2").style.display = "block";
 }
 function hideDialog2(){
 document.getElementById("overlay").style.display = "none";
 document.getElementById("dialog2").style.display = "none";
 }
 
function showDialog3(){
 document.getElementById("overlay").style.display = "block";
 document.getElementById("dialog3").style.display = "block";
 }
function hideDialog3(){
 document.getElementById("overlay").style.display = "none";
 document.getElementById("dialog3").style.display = "none";
}
function showDialog4(){
 document.getElementById("overlay").style.display = "block";
 document.getElementById("dialog4").style.display = "block";
 }
function hideDialog4(){
 document.getElementById("overlay").style.display = "none";
 document.getElementById("dialog4").style.display = "none";
}
function showDialog5(){
 document.getElementById("overlay").style.display = "block";
 document.getElementById("dialog5").style.display = "block";
 }
function hideDialog5(){
 document.getElementById("overlay").style.display = "none";
 document.getElementById("dialog5").style.display = "none";
}

// tab-bar
function get(obj){
 return document.getElementById(obj);
}
function switchOne(){
 get("tab-1").style.background = "#3a9ffd";
 get("tab-2").style.background = "#fff";
 get("tab-3").style.background = "#fff";
 get("tab-4").style.background = "#fff";

 get("panel-1").style.display = "flex";
 get("panel-2").style.display = "none";
 get("panel-3").style.display = "none";
 get("panel-4").style.display = "none";
}
function switchTwo(){
 get("tab-1").style.background = "#fff";
 get("tab-2").style.background = "#3a9ffd";
 get("tab-3").style.background = "#fff";
 get("tab-4").style.background = "#fff";

 get("panel-1").style.display = "none";
 get("panel-2").style.display = "flex";
 get("panel-3").style.display = "none";
 get("panel-4").style.display = "none";
}
function switchThree(){
 get("tab-1").style.background = "#fff";
 get("tab-2").style.background = "#fff";
 get("tab-3").style.background = "#3a9ffd";
 get("tab-4").style.background = "#fff";

 get("panel-1").style.display = "none";
 get("panel-2").style.display = "none";
 get("panel-3").style.display = "flex";
 get("panel-4").style.display = "none";
}
function switchFour(){
 get("tab-1").style.background = "#fff";
 get("tab-2").style.background = "#fff";
 get("tab-3").style.background = "#fff";
 get("tab-4").style.background = "#3a9ffd";

 get("panel-1").style.display = "none";
 get("panel-2").style.display = "none";
 get("panel-3").style.display = "none";
 get("panel-4").style.display = "flex";
}

// p




