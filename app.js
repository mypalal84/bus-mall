'use strict';

var productName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var imagePath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var shown = 0;
var clicked = 0;
var productOne = document.createElement('pic-1');
var productTwo = document.createElement('pic-2');
var productThree = document.createElement('pic-3');

//constructor function
function ProductPic(productName, clicked, shown, imagePath) {
  this.productName = productName;
  this.clicked = clicked;
  this.shown = shown;
  this.imagePath = imagePath;

};

//adding our constructor objects
var bag = new ProductPic(productName[0], 0, 0, imagePath[0]);
var banana = new ProductPic(productName[1], 0, 0, imagePath[1]);
var bathroom = new ProductPic(productName[2], 0, 0, imagePath[2]);
var boots = new ProductPic(productName[3], 0, 0, imagePath[3]);
var breakfast = new ProductPic(productName[4], 0, 0, imagePath[4]);
var bubblegum = new ProductPic(productName[5], 0, 0, imagePath[5]);
var chair = new ProductPic(productName[6], 0, 0, imagePath[6]);
var cthulhu = new ProductPic(productName[7], 0, 0, imagePath[7]);
var dogDuck = new ProductPic(productName[8], 0, 0, imagePath[8]);
var dragon = new ProductPic(productName[9], 0, 0, imagePath[9]);
var pen = new ProductPic(productName[10], 0, 0, imagePath[10]);
var petSweep = new ProductPic(productName[11], 0, 0, imagePath[11]);
var scissors = new ProductPic(productName[12], 0, 0, imagePath[12]);
var shark = new ProductPic(productName[13], 0, 0, imagePath[13]);
var sweep = new ProductPic(productName[14], 0, 0, imagePath[14]);
var tauntaun = new ProductPic(productName[15], 0, 0, imagePath[15]);
var unicorn = new ProductPic(productName[16], 0, 0, imagePath[16]);
var usb = new ProductPic(productName[17], 0, 0, imagePath[17]);
var waterCan = new ProductPic(productName[18], 0, 0, imagePath[18]);
var wineGlass = new ProductPic(productName[19], 0, 0, imagePath[19]);

var productPicArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];
