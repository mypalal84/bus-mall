'use strict';

var productName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var imagePath = ['./img/bag.jpg', './img/banana.jpg', './img/bathroom.jpg', './img/boots.jpg', './img/breakfast.jpg', './img/bubblegum.jpg', './img/chair.jpg', './img/cthulhu.jpg', './img/dog-duck.jpg', './img/dragon.jpg', './img/pen.jpg', './img/pet-sweep.jpg', './img/scissors.jpg', './img/shark.jpg', './img/sweep.png', './img/tauntaun.jpg', './img/unicorn.jpg', './img/usb.gif', './img/water-can.jpg', './img/wine-glass.jpg'];

var leftImage = document.getElementById('left');
var centerImage = document.getElementById('center');
var rightImage = document.getElementById('right');
var elArray = [leftImage, centerImage, rightImage];
var shown = 0;
var clicked = 0;
var productOne = document.createElement('pic-1');
var productTwo = document.createElement('pic-2');
var productThree = document.createElement('pic-3');

//constructor function
function ProductPic(productName, imagePath){
  this.productName = productName;
  this.clicked = 0;
  this.shown = 0;
  this.imagePath = imagePath;
};

//adding our constructor objects
var bag = new ProductPic(productName[0], imagePath[0]);
var banana = new ProductPic(productName[1], imagePath[1]);
var bathroom = new ProductPic(productName[2], imagePath[2]);
var boots = new ProductPic(productName[3], imagePath[3]);
var breakfast = new ProductPic(productName[4], imagePath[4]);
var bubblegum = new ProductPic(productName[5], imagePath[5]);
var chair = new ProductPic(productName[6], imagePath[6]);
var cthulhu = new ProductPic(productName[7], imagePath[7]);
var dogDuck = new ProductPic(productName[8], imagePath[8]);
var dragon = new ProductPic(productName[9], imagePath[9]);
var pen = new ProductPic(productName[10], imagePath[10]);
var petSweep = new ProductPic(productName[11], imagePath[11]);
var scissors = new ProductPic(productName[12], imagePath[12]);
var shark = new ProductPic(productName[13], imagePath[13]);
var sweep = new ProductPic(productName[14], imagePath[14]);
var tauntaun = new ProductPic(productName[15], imagePath[15]);
var unicorn = new ProductPic(productName[16], imagePath[16]);
var usb = new ProductPic(productName[17], imagePath[17]);
var waterCan = new ProductPic(productName[18], imagePath[18]);
var wineGlass = new ProductPic(productName[19], imagePath[19]);

var productPicArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

//random number between 0 and 19
var randNum = function(){
  var min = 0;
  var max = 19;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//method for displaying the 3 random pics
function displayImg() {
  for(var i = 0; i < 3; i++){
    var newImage = randNum();
    var getImage = productPicArray[newImage].imagePath;
    console.log(getImage);
    console.log(elArray);
    elArray[i].setAttribute('src', getImage);
  }
};
displayImg();
//while statement to make sure duplicate images don't show

//   var leftIndex = randNum();
//   var leftProduct = productPicArray[leftIndex];
//   var left = document.getElementById('left');
//   left.src = leftProduct.imagePath;
//   left.alt = leftProduct.productName;
//   leftProduct.shown += 1;
// };
//
// displayImg();

  // var centerIndex = randNum();
  // while (centerIndex === leftIndex) {
  //   centerIndex = randNum();
  // }
  //
  // var centerProduct = productPicArray[centerIndex];
  // 'pic-center'.src = centerProduct.path;
  // 'pic-center'.alt = centerProduct.productName;
  // centerProduct.views += 1;
  //
  // var rightIndex = randNum();
  // while (rightIndex === leftIndex || rightIndex === centerIndex) {
  //   rightIndex = randNum();
  // }
  //
  // var rightProduct = productPicArray[rightIndex];
  // 'pic-right'.src = rightProduct.path;
  // 'pic-right'.alt = rightProduct.productName;
  // rightProduct.views += 1;
  //
  // shown = [leftIndex, centerIndex, rightIndex];
//
// };
//
//   ProductPic.displayPics();
