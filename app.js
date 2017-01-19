'use strict';
// //canvas
// var context = document.getElementById('demo-chart').getContext('2d');
//
// var chartData = [100, 200, 300, 50, 10];
// var chartColors = ['blue', 'red', 'yellow', 'orange', 'green'];
// var chartLabels = ['Adam', 'Russell', 'Lynch', 'Tom Brady', 'Santa'];
//
// var chartOptions = {
//   responsive: false,
//   scales: {
//     yAxes: [{
//       ticks: {
//         beginAtZero: true
//       }
//     }]
//   }
// };
//
// var myFirstChart = new Chart(context, {
//   type:'bar',
//   data: {
//     labels: chartLabels,
//     datasets: [{
//       label: '# of votes for each color',
//       data: chartData,
//       backgroundColor: chartColors
//     }]
//   },
//   options: chartOptions
// });

//global variables
var productArray = [];
var randNumArray = [];
var leftImage = document.getElementById('left');
var centerImage = document.getElementById('center');
var rightImage = document.getElementById('right');
var elArray = [leftImage, centerImage, rightImage];
var shown;
var clicked;
var clickCounter = 0;

//constructor function
function Product(productName, imagePath){
  this.productName = productName;
  this.clicked = 0;
  this.shown = 0;
  this.imagePath = imagePath;

};

//adding our constructor objects and pushing them into the productArray
productArray.push(new Product('bag', 'img/bag.jpg'));
productArray.push(new Product('banana', 'img/banana.jpg'));
productArray.push(new Product('bathroom', 'img/bathroom.jpg'));
productArray.push(new Product('boots', 'img/boots.jpg'));
productArray.push(new Product('breakfast', 'img/breakfast.jpg'));
productArray.push(new Product('bubblegum', 'img/bubblegum.jpg'));
productArray.push(new Product('chair', 'img/chair.jpg'));
productArray.push(new Product('cthulhu', 'img/cthulhu.jpg'));
productArray.push(new Product('dog-duck', 'img/dog-duck.jpg'));
productArray.push(new Product('dragon', 'img/dragon.jpg'));
productArray.push(new Product('pen', 'img/pen.jpg'));
productArray.push(new Product('pet-sweep', 'img/pet-sweep.jpg'));
productArray.push(new Product('scissors', 'img/scissors.jpg'));
productArray.push(new Product('shark', 'img/shark.jpg'));
productArray.push(new Product('sweep', 'img/sweep.png'));
productArray.push(new Product('tauntaun', 'img/tauntaun.jpg'));
productArray.push(new Product('unicorn', 'img/unicorn.jpg'));
productArray.push(new Product('usb', 'img/usb.gif'));
productArray.push(new Product('water-can', 'img/water-can.jpg'));
productArray.push(new Product('wine-glass', 'img/wine-glass.jpg'));
console.log(productArray);

//random number between 0 and 19
var randNum = function(){
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
    productArray[randNumArray[i]].shown++;
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
      productArray[randNumArray[0]].clicked++;
    }
    else if(event.target.id === 'center'){
      productArray[randNumArray[1]].clicked++;
    }
    else if(event.target.id === 'right'){
      productArray[randNumArray[2]].clicked++;
    }
    noRepeat();
    renderImage();
  }
  else {
    renderImage();
    // console.log(percent(productArray[5].clicked, productArray[5].shown));
    for (var i = 0; i < productArray.length; i++){
      var liEl = document.getElementById('product-ul');
      var newLiEl = document.createElement('li');
      newLiEl.setAttribute('class', 'product-images');
      newLiEl.textContent = productArray[i].productName + ': was shown ' + productArray[i].shown + ' times, and was clicked ' + productArray[i].clicked + ' times.';
      liEl.appendChild(newLiEl);
    }
  }
}

//percentage function for products clicked/products shown
function percent(clicked, shown) {
  return((clicked / shown) * 100).toFixed(2);
}
