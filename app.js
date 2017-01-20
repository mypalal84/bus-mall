'use strict';

//global variables
var productArray = [];
var randNumArray = [];
var productNameArray = [];
var clickedArray = [];
var shownArray = [];
var leftImage = document.getElementById('left');
var centerImage = document.getElementById('center');
var rightImage = document.getElementById('right');
var elArray = [leftImage, centerImage, rightImage];
var shown;
var clicked;
var clickCounter = 0;
//for chart
var chartColors = ['tomato', 'sienna', 'paleturquoise', 'darkseagreen', 'sandybrown', 'mocassin', 'cornflowerblue', 'darkkhaki', 'seashell', 'limegreen', 'royalblue', 'darksalmon', 'wheat', 'darkgrey', 'burlywood', 'darkcyan', 'mediumvioletred', 'darkred', 'forestgreen', 'bisque'];
var chartLabels = [];

//constructor function
function Product(productName, imagePath){
  this.productName = productName;
  this.clicked = 0;
  this.shown = 0;
  this.imagePath = imagePath;
};

//adding our constructor objects and pushing them into the productArray
var bag = productArray.push(new Product('bag', 'img/bag.jpg'));
var banana = productArray.push(new Product('banana', 'img/banana.jpg'));
var bathroom = productArray.push(new Product('bathroom', 'img/bathroom.jpg'));
var boots = productArray.push(new Product('boots', 'img/boots.jpg'));
var breakfast = productArray.push(new Product('breakfast', 'img/breakfast.jpg'));
var bubblegum = productArray.push(new Product('bubblegum', 'img/bubblegum.jpg'));
var chair = productArray.push(new Product('chair', 'img/chair.jpg'));
var cthulhu = productArray.push(new Product('cthulhu', 'img/cthulhu.jpg'));
var dogDuck = productArray.push(new Product('dog-duck', 'img/dog-duck.jpg'));
var dragon = productArray.push(new Product('dragon', 'img/dragon.jpg'));
var pen = productArray.push(new Product('pen', 'img/pen.jpg'));
var petSweep = productArray.push(new Product('pet-sweep', 'img/pet-sweep.jpg'));
var scissors = productArray.push(new Product('scissors', 'img/scissors.jpg'));
var shark = productArray.push(new Product('shark', 'img/shark.jpg'));
var sweep = productArray.push(new Product('sweep', 'img/sweep.png'));
var tauntaun = productArray.push(new Product('tauntaun', 'img/tauntaun.jpg'));
var unicorn = productArray.push(new Product('unicorn', 'img/unicorn.jpg'));
var usb = productArray.push(new Product('usb', 'img/usb.gif'));
var waterCan = productArray.push(new Product('water-can', 'img/water-can.jpg'));
var wineGlass = productArray.push(new Product('wine-glass', 'img/wine-glass.jpg'));
console.log(productArray);

//random number between 0 and 19
var randNum = function() {
  var min = 0;
  var max = 19;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//method for 3 random pics w/o repeats
function noRepeat() {
  for(var i = 0; i < 3; i++){
    do{
      var newImage = randNum();
    } while(randNumArray.includes(newImage));
    randNumArray.push(newImage);
  }
  if(randNumArray.length > 3){
    randNumArray.splice(0,3);
  }
}
noRepeat();

function renderImage() {
  for(var i = 0; i < randNumArray.length; i++){
    elArray[i].setAttribute('src', productArray[randNumArray[i]].imagePath);
    var productShown = productArray[randNumArray[i]];
    productShown.shown++;
  }
}
renderImage();

//event listener
leftImage.addEventListener('click', clickTrackerHandler, false);
centerImage.addEventListener('click', clickTrackerHandler, false);
rightImage.addEventListener('click', clickTrackerHandler, false);

//click event handler
function clickTrackerHandler(event) {
  event.preventDefault();
  event.stopPropagation();
  if(clickCounter < 25) {
    clickCounter++;
  // console.log(event);
  // console.log(event.target.id);
    if(event.target.id === 'left'){
      var leftClick = productArray[randNumArray[0]];
      leftClick.clicked++;
    }
    else if(event.target.id === 'center'){
      var centerClick = productArray[randNumArray[1]];
      centerClick.clicked++;
    }
    else if(event.target.id === 'right'){
      var rightClick = productArray[randNumArray[2]];
      rightClick.clicked++;
    }
    noRepeat();
    renderImage();
  }
  else {
    renderImage();
    //removeEventListener
    leftImage.removeEventListener('click', clickTrackerHandler, false);
    centerImage.removeEventListener('click', clickTrackerHandler, false);
    rightImage.removeEventListener('click', clickTrackerHandler, false);
    localStorageFunc();
    pushIntoArrays();
    renderChart();
    console.log(clickedArray);

  }
}

//push numbers into arrays
function pushIntoArrays() {
  for(var i = 0; i < productArray.length; i++){
    clickedArray.push(productArray[i].clicked);
    shownArray.push(productArray[i].shown);
    productNameArray.push(productArray[i].productName);
  }
};

//percentage function for products clicked/products shown
function percent(clicked, shown) {
  return((clicked / shown) * 100).toFixed(2);
}

//canvas
function renderChart() {
  var context = document.getElementById('product-chart').getContext('2d');
  Chart.defaults.global.defaultFontColor = 'black';
  Chart.defaults.global.defaultFontSize = 14;
  var chartOptions = {
    responsive: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  var productChart = new Chart(context, {
    type:'bar',
    data: {
      labels: productNameArray,
      datasets: [{
        label: '# of votes for each product',
        data: clickedArray,
        backgroundColor: chartColors
      }]
    },
    options: chartOptions
  });
}

//local storage function
function localStorageFunc(){
  for(var i = 0; i < productArray.length; i++){
    localStorage.setItem(productArray[i].productName , JSON.stringify(productArray[i]));
  };
};
