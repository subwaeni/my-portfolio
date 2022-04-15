// Javascript change background image 
 function changeBg(){
  const images = [
   'url(./img/hero01.png)',
   'url(./img/hero02.png)',
  ]
  const hero = document.querySelector('hero')
  const bg = images[Math.floor(Math.random()* images.length)];
  hero.style.backgroundImage =bg;
 }
setInterval(changeBg , 3000)

//tab
function get(obj){
 return document.getElementById(obj);
}
function switchOne(){
 get("tab-1").style.border= "1px solid #3c3c3c";
 get("tab-2").style.border = "1px solid transparent";
 get("tab-3").style.border = "1px solid transparent";
 get("tab-4").style.border = "1px solid transparent";
 get("panel-1").style.display = "block";
 get("panel-2").style.display = "none";
 get("panel-3").style.display = "none";
 get("panel-4").style.display = "none";
}
function switchTwo(){
 get("tab-1").style.border= "1px solid transparent";
 get("tab-2").style.border = "1px solid #3c3c3c";
 get("tab-3").style.border = "1px solid transparent";
 get("tab-4").style.border = "1px solid transparent";
 get("panel-1").style.display = "none";
 get("panel-2").style.display = "block";
 get("panel-3").style.display = "none";
 get("panel-4").style.display = "none";
}
function switchThree(){
 get("tab-1").style.border= "1px solid transparent";
 get("tab-2").style.border = "1px solid transparent";
 get("tab-3").style.border = "1px solid #3c3c3c";
 get("tab-4").style.border = "1px solid transparent";
 get("panel-1").style.display = "none";
 get("panel-2").style.display = "none";
 get("panel-3").style.display = "block";
 get("panel-4").style.display = "none";

}
function switchFour(){
 get("tab-1").style.border= "1px solid transparent";
 get("tab-2").style.border = "1px solid transparent";
 get("tab-3").style.border = "1px solid transparent";
 get("tab-4").style.border = "1px solid #3c3c3c";
 get("panel-1").style.display = "none";
 get("panel-2").style.display = "none";
 get("panel-3").style.display = "none";
 get("panel-4").style.display = "block";

}

// menuicon
var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";
function menutoggle(){
 if(MenuItems.style.maxHeight == "0px"){
  MenuItems.style.maxHeight = "300px"
 }
 else{
 MenuItems.style.maxHeight = "0px";
 }
}




