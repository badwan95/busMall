'use strict';

var firstPicID = document.getElementById('firstPicture');
var secondPicID = document.getElementById('secondPicture');
var thirdPicID = document.getElementById('thirdPicture');
var products = document.getElementById('products');
var imgArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'
];
var imgArrayName = ['Bag', 'Banana', 'Bathroom', 'Boots.', 'Breakfast', 'Bubblegum', 'Chair', 'Cthulhu', 'Dog Duck', 'Dragon', 'Pen', 'Pet Sweep', 'Scissors', 'Shark', 'Sweep', 'Tauntaun', 'Unicorn', 'Usb', 'Water Can', 'Wine Glass'
];
var totalImages = [];
var imageNumber = [];

function randomImages(){
  var firstRandomNumber = randomNumber(0,imgArray.length);
  imageNumber.push(firstRandomNumber);
  firstPicID.src = './img/' + imgArray[firstRandomNumber];
  firstPicID.alt = imgArray[firstRandomNumber];

  var secondRandomNumber = randomNumber(0,imgArray.length);
  imageNumber.push(secondRandomNumber);
  secondPicID.src = './img/' + imgArray[secondRandomNumber];
  secondPicID.alt = imgArray[secondRandomNumber];

  var thirdRandomNumber = randomNumber(0,imgArray.length);
  imageNumber.push(thirdRandomNumber);
  thirdPicID.src = './img/' + imgArray[thirdRandomNumber];
  thirdPicID.alt = imgArray[thirdRandomNumber];

  while (firstRandomNumber === secondRandomNumber || firstRandomNumber === thirdRandomNumber){
    firstRandomNumber = randomNumber(0,imgArray.length);
    firstPicID.src = './img/' + imgArray[firstRandomNumber];
    firstPicID.alt = imgArray[firstRandomNumber];
  }

  while (secondRandomNumber === firstRandomNumber || secondRandomNumber === thirdRandomNumber ){
    secondRandomNumber = randomNumber(0,imgArray.length);
    secondPicID.src = './img/' + imgArray[secondRandomNumber];
    secondPicID.alt = imgArray[secondRandomNumber];
  }

  while (thirdRandomNumber === firstRandomNumber || thirdRandomNumber === secondRandomNumber) {
    thirdRandomNumber = randomNumber(0,imgArray.length);
    thirdPicID.src = './img/' + imgArray[thirdRandomNumber];
    thirdPicID.alt = imgArray[thirdRandomNumber];
  }
}
randomImages();

function ImageConstructor (name, url){
  this.name = name;
  this.url = 'img/'+ url;
  totalImages.push(this);
  console.log(`Name: ${this.name}, URL: ${this.url}`);
}
for ( var i=0 ; i < imageNumber.length; i++){
  new ImageConstructor (imgArrayName[imageNumber[i]], imgArray[imageNumber[i]]);
}




var clicks = 0;


function newProducts(e){
  if (e.target.id==='firstPicture' || e.target.id=== 'secondPicture' || e.target.id=== 'thirdPicture'){
    randomImages();
    clicks = clicks + 1;
    console.log(clicks);
  }
  if(clicks === 25){
    firstPicID.remove();
    secondPicID.remove();
    thirdPicID.remove();
  }
}




products.addEventListener('click', newProducts);





// HELPER FUNCTION
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
