window.onload = function(){
    start();
};
var vard = 0;
var upLetter1=s=>s.replace(/./,m=>m.toUpperCase());
String.prototype.replaceAt = function(index, replacement) {
	if (index >= this.length) {
		return this.valueOf();
	}

	return this.substring(0, index) + replacement + this.substring(index + 1);
}
const win = document.getElementById("win");
const lose = document.getElementById("lose");
var start = function(){    
    win.classList.add("invisible");
    lose.classList.add("invisible");
    const listOfWords = ["baggy","java","mum","interesting","this","easy","Superb","god","anime","dude"];
    window.word = listOfWords[Math.round(Math.random()*10)];
    window.par = document.createElement("p");            
    for(var j=0;j< word.length;j++){
        par.innerText = par.innerText + "_ ";
    }
    document.getElementById("alphabet").appendChild(par);
    console.log("baggy");
}
    const hangman = document.getElementsByTagName("img");
hangman[0].classList.add("visible");
let i = 0;
function change(){
        hangman[i].classList.add("invisible");
        hangman[i+1].classList.remove("invisible");
        hangman[i+1].classList.add("visible");
        i++;
}
function check(letter) {
   if(word.includes(letter)){
       console.log(letter);
        var indices = [];
        for(var k=0; k<word.length;k++) {
            if (word[k] === letter) indices.push(k);
        }
        console.log(indices);
        //nospaces = "" for reset
        var noSpaces = par.innerText.replace(/\s+/g, '');
        for(var char = 0;char<indices.length;char++){
            var newNospaces = noSpaces.replaceAt(indices[char],letter);
            par.innerText = newNospaces.split('').join(" ");
            noSpaces = newNospaces;
        }
        par.innerText = upLetter1(par.innerText);
        if(word == par.innerText.replace(/\s+/g, '').toLowerCase()){
            console.log("you win");
            win.classList.remove("invisible");
        }
   } else{
       if(i==6){
        console.log("you Lost");
        lose.classList.remove("invisible")
        } else{
        change();
       }
   }
}

function reset(){
    par.classList.add("invisible");
    document.getElementById("alphabet").classList.remove("invisible");
    lose.classList.add("invisible");
    win.classList.add("invisible");
    hangman[0].classList.remove("invisible");
    for(var k = 1;k<7;k++){
        hangman[k].classList.remove("visible")
        hangman[k].classList.add("invisible");

    }
    i= 0 ;
    start();
}
