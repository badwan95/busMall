'use strict';
var numberOfClicks = 0;
var allowedClicks = 25;
var firstPicID = document.getElementById('firstPicture');
var secondPicID = document.getElementById('secondPicture');
var thirdPicID = document.getElementById('thirdPicture');
var articleID = document.getElementById('article');
var products = document.getElementById('products');
var productCatalogResults = [];
var savedClicks = [];
var savedViews = [];
var imgArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'
];
var imgArrayName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

function ProductsCatalog (url){
  this.name = url.split('.')[0];
  this.url = './img/' + url;
  this.clicks = 0;
  this.views = 0;
  this.fileName = url;
  productCatalogResults.push(this);
}
for (var i=0; i < imgArray.length ; i++){
  new ProductsCatalog (imgArray[i]);
}

function adding(){
  var firstRandom = randomNumber(0,productCatalogResults.length);
  var firstObject = productCatalogResults[firstRandom];
  var secondRandom = randomNumber(0,productCatalogResults.length);

  var secondObject = productCatalogResults[secondRandom];
  var thirdRandom = randomNumber(0,productCatalogResults.length);
  var thirdObject = productCatalogResults[thirdRandom];
  // First Picture
  firstPicID.setAttribute('src', firstObject.url);
  firstPicID.setAttribute('alt', firstObject.name);
  firstObject.views+=1;
  console.log(firstObject);
  console.log(firstPicID);
  // Second Picture
  secondPicID.setAttribute('src', secondObject.url);
  secondPicID.setAttribute('alt', secondObject.name);
  secondObject.views+=1;
  // Third Picture
  thirdPicID.setAttribute('src', thirdObject.url);
  thirdPicID.setAttribute('alt', thirdObject.name);
  thirdObject.views+=1;
  // check for unique images per page ( no need for first picture check because its different every time)
  // while (secondObject === firstObject || secondObject === thirdObject){
  //   secondObject = productCatalogResults[randomNumber(0,imgArray.length-1)];
  //   secondPicID.setAttribute('src', secondObject.url);
  //   secondPicID.setAttribute('alt', secondObject.alt);
  // }
  // while (thirdObject === firstObject || thirdObject === secondObject){
  //   thirdObject = productCatalogResults[randomNumber(0,imgArray.length-1)];
  //   thirdPicID.setAttribute('src', thirdObject.url);
  //   thirdPicID.setAttribute('alt', thirdObject.alt);
  // }
}
adding();

function clickOnProduct(event){
  if(event.target.id === 'firstPicture'){
    numberOfClicks = numberOfClicks + 1;
    var altAttribute = firstPicID.getAttribute('url');
    var indexNum = imgArray.indexOf(altAttribute);
    productCatalogResults[indexNum].clicks = productCatalogResults[indexNum].clicks+1;
    adding();
  }else if(event.target.id === 'secondPicture'){
    numberOfClicks = numberOfClicks + 1;
    altAttribute = secondPicID.getAttribute('alt');
    console.log(altAttribute);
    indexNum = imgArrayName.indexOf(altAttribute);
    productCatalogResults[indexNum].clicks = productCatalogResults[indexNum].clicks+1;
    adding();
  }else if(event.target.id === 'thirdPicture'){
    numberOfClicks = numberOfClicks + 1;
    altAttribute = thirdPicID.getAttribute('alt');
    indexNum = imgArrayName.indexOf(altAttribute);
    productCatalogResults[indexNum].clicks = productCatalogResults[indexNum].clicks+1;
    adding();
  }
  if (numberOfClicks === allowedClicks){
    products.removeEventListener('click', clickOnProduct);
    firstPicID.remove();
    secondPicID.remove();
    thirdPicID.remove();
    // data();
    savingClicksAndViews();
    // drawChart();
  }

}

products.addEventListener('click', clickOnProduct);

function savingClicksAndViews(){
  for (i=0 ; i < productCatalogResults.length ; i++){
    savedClicks.push(productCatalogResults[i].clicks);
    savedViews.push(productCatalogResults[i].views);
  }
}

// HELPER FUNCTION
function randomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}