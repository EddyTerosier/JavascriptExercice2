"use strict";

// Exercice 1


/* let title = document.getElementById("titre");
let btn1 = document.getElementById("rgb");
btn1.addEventListener("mousedown", function(){
    title.style.backgroundColor = "yellow"
}, false); */

function changement(element){
    let title =document.getElementById("titre");
    if(element.getAttribute("name")=="color"){
        title.style.color="rgb("+element.value+","+element.value+","+element.value+")";
         let a= 255-element.value;
         title.style.color="rgb("+a+","+a+","+a+")";
    }
    else if(element.getAttribute("name")=="padding"){
        title.style.padding=element.value+"px";
    }
    else if(element.getAttribute("name")=="height"){
        title.style.height=element.value+"px";
    }
    else if(element.getAttribute("name")=="width"){
        title.style.width=element.value+"px";
    }
    else if(element.getAttribute("name")=="radius"){
        title.style.borderRadius=element.value+"px";
    }
    else if(element.getAttribute("name")=="rotation"){
        title.style.transform="rotate("+element.value+"deg)";
    }

}


// Exercice 2

function changer_style(){
    let p = document.getElementById("paragraphe");
    p.style.color="white";
    p.style.backgroundColor="red";
    p.style.border="2px dotted black";
    p.style.padding="5px";
  }

function changer_style(){
    let p = document.getElementById("paragraphe");
    p.classList.add("active");
}


// Exercice 3

let span = document.getElementsByTagName("span");
let btn_start=document.getElementById("start");
let btn_stop=document.getElementById("stop");
let a;
let ms=0,s=0,min=0,h=0;


function start(){
   a =setInterval(update_chrono,100);
   btn_start.disabled=true;
  
  }

function update_chrono(){
    ms+=1;
       if(ms==10){
        ms=1;
        s+=1;
       }
       if(s==60){
        s=0;
        min+=1;
       }
       if(min==60){
        min=0;
        h+=1;
       }
    //    AFFICHE les valeurs
       span[0].innerHTML=h+" h";
       span[1].innerHTML=min+" min";
       span[2].innerHTML=s+" s";
       span[3].innerHTML=ms+" ms";

  }
  
function stop(){
    clearInterval(a);
    btn_start.disabled=false;
		
	}
function reset(){
   clearInterval(a);
    btn_start.disabled=false;
    ms=0,s=0,min=0,h=0;
    span[0].innerHTML=h+" h";
    span[1].innerHTML=min+" min";
    span[2].innerHTML=s+" s";
    span[3].innerHTML=ms+" ms";
      };


// Exercice 4

function char(){

}


// Exercice 5
// A finir

let tableau = new Array();
	function add_name(){
		tableau.push(prompt("Saisir un nom"));
	}
    function tirage(){
    	if(tableau.length>0){
        let result;
        alert("Le nom gagnant est : "+tableau[result]);
    	}
    	else alert("Veillez ajouter des noms");
    }