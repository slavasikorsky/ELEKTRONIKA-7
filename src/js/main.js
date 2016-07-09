'use strict'

var className, getHours, getMinutes, firstBlock, secondBlock, currentMinute;
var HoursBox = document.querySelector('.hours');
var MinutesBox = document.querySelector('.minutes');

//Берем дату для проверки
var date = new Date();
getHours = date.getHours();
getMinutes = date.getMinutes();

currentMinute = getMinutes;
//Утанавливаем текущее время на часах
setDate(getHours, HoursBox);
setDate(getMinutes, MinutesBox);

//Каждую секунду берем значение часов и минут и выставляем по ним часы, если значение изменилось
setInterval(function(){
  var date = new Date();
  getHours = date.getHours();
  getMinutes = date.getMinutes();

    if (currentMinute != getMinutes){
      setDate(getHours, HoursBox);
      setDate(getMinutes, MinutesBox);
      currentMinute = getMinutes;
    }
},1000);

//основная функция, определяем в ней какие классы и куда добавлять
  function setDate(value, boxName){
    firstBlock = boxName.children[0];
    secondBlock = boxName.children[1];
    //если меньше 10 часов/минут
    if (value<10){
      addingClass(firstBlock, 'null');
      value = parseInt(value);
      addingClass(secondBlock, whatClass(value));
    }
    else{
      //делим число на 2 переменные, заносим их в массив
      var number = String(value).split("");
        number[0] = parseInt(number[0]);
        number[1] = parseInt(number[1]);
        addingClass(firstBlock, whatClass(number[0]));
        addingClass(secondBlock, whatClass(number[1]));

    }
  }

//Определяем какой будет класс у цыфры
  function whatClass(value){
    switch (value) {
      case 1: className = "one";
        break;
      case 2: className = "two";
        break;
      case 3: className = "three";
        break;
      case 4: className = "four";
        break;
      case 5: className = "five";
        break;
      case 6: className = "six";
        break;
      case 7: className = "seven";
        break;
      case 8: className = "eight";
        break;
      case 9: className = "nine";
        break;
      case 0: className = "null";
        break;

    }
    return className;
  }

  //Добавляем класс блоку
    function addingClass(element, class){
      //удаляем прошлый класс, если там была какая то цыфра до этого
      var prevClass = element.classList;
      element.classList.remove(prevClass[0]);
      //и добавляем класс к нужному блоку
      element.classList.add(class);
    }
