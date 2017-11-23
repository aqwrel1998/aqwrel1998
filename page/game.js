function gamer(fer){
var myCards = document.getElementById('container');
var resultsArray = [];
var counter = 0;
var text = document.getElementById('text');
var seconds = 00; 
var tens = 00; 
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var Interval ;
var images = [
  'black', 
  'chaplin', 
  'fight', 
  'forest', 
  'future',
  'ganibal', 
  'kriminal', 
  'mafia', 
  'mask', 
  'pirats',
  'sparta', 
  'terminator'

];
var diff = images.slice(images.length - fer); //  Сложность
var clone = diff.slice(0); // Дублируем массив
var cards = clone.concat(clone); // Соеденяем массивы

// Перемешиваем массив
function shuffle(o){
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i],   o[i] = o[j], o[j] = x);
  return o;
}
shuffle(cards); 

for (var i = 0; i < cards.length; i++) {
  card = document.createElement('div');
  card.dataset.item = cards[i];
  card.dataset.view = "card";
  
  myCards.appendChild(card);
  countd = 0;   
  card.onclick = function () {
     countd += 1;
     document.getElementById('clickme').innerHTML = "Кликов: " + countd; // Подсчет кликов

    if (this.className != 'flipped' && this.className != 'correct'){
        this.className = 'flipped';
        var result = this.dataset.item;
        resultsArray.push(result);
        clearInterval(Interval);
        Interval = setInterval(startTimer, 5);
    }
  
    if (resultsArray.length > 1) {

      if (resultsArray[0] === resultsArray[1]) {
        check("correct");
        counter ++;
        win();
        resultsArray = [];
      } else {
        check("reverse");
        resultsArray = [];
      }
      
    }
    
  }
   
};


var check = function(className) {
  
  var x = document.getElementsByClassName("flipped");
  setTimeout(function() {

    for(var i = (x.length - 1); i >= 0; i--) {
      x[i].className = className;
    }
     
  },500);
   
}

var record = function(fer){  									// запись рекордов
	localVery = localStorage.getItem('veryez');
  localEz = localStorage.getItem('easy');
  localNorm = localStorage.getItem('norm')
  localHard = localStorage.getItem('hard');
  var elements = document.querySelectorAll('input');


	if(fer==5){
      if(localVery <= point){
    		localStorage.setItem("veryez", " " + nums);
        function checkValidity() {};
      }
      else {
        console.log("nons")
      }
	}
	else if(fer==8){
		if(localEz <= point){
        localStorage.setItem("easy", " " + nums);
        function checkValidity() {};
      }
      else {
        console.log("nons")
      }
	}
	else if(fer==10){
		if(localNorm <= point){
        localStorage.setItem("norm", " " + nums);
        function checkValidity() {};
      }
      else {
        console.log("nons")
      }
	}
	else{
		if(localHard <= point){
        localStorage.setItem("hard", " " + nums);
        function checkValidity() {};
      }
      else {
        console.log("nons")
      }
	}

  for (i=0; i<elements.length; i++) {  // Имя в localStorage
   (function(element) {
     var id = element.getAttribute('id');
     element.value = localStorage.getItem(id);
     element.oninput = function() {
       localStorage.setItem(id, element.value);
       checkValidity();
     };
   })(elements[i]);
  }
}


var win = function () {

  if(counter === fer) {
    clearInterval(Interval);
    document.getElementById("text-wraper").style.display = "block";
    point = 1/(seconds + countd) * 100000  // формула на очки
    nums = point.toFixed(0)  // округляем очки
    document.getElementById('points').innerHTML = "Ваши очки: " + nums;
    text.innerHTML = "Ваше время " + seconds + ":" + tens + " Кликов:" + countd;
    record(fer);
  } 
}

     
function startTimer () {
  tens++; 
    
  if(tens < 9){
    appendTens.innerHTML = "0" + tens;
  }
    
  if (tens > 9){
    appendTens.innerHTML = tens;
      
  } 
    
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
    
  if (seconds > 9){
    appendSeconds.innerHTML = seconds;
  }
  
}

}