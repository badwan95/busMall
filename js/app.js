'use strict';
var numberOfClicks = 0;
var allowedClicks = 25;
var firstPicID = document.getElementById('firstPicture');
var secondPicID = document.getElementById('secondPicture');
var thirdPicID = document.getElementById('thirdPicture');
var articleID = document.getElementById('article');
var arrID = [firstPicID,secondPicID,thirdPicID];
var products = document.getElementById('products');
var imgArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'
];
var imgArrayName = ['Bag', 'Banana', 'Bathroom', 'Boots', 'Breakfast', 'Bubblegum', 'Chair', 'Cthulhu', 'Dog Duck', 'Dragon', 'Pen', 'Pet Sweep', 'Scissors', 'Shark', 'Sweep', 'Tauntaun', 'Unicorn', 'Usb', 'Water Can', 'Wine Glass'
];
var productCatalogResults = [];

function ProductsCatalog (name,url){
  this.name = name;
  this.url = './img/' + url;
  this.clicks = 0;
  this.views = 0;
  productCatalogResults.push(this);
}
for (var i=0; i < imgArray.length ; i++){
  new ProductsCatalog (imgArrayName[i], imgArray[i]);
}
function threeRandoms(){
  for (i=0; i<arrID.length;i++){
    var randomGenerated = randomNumber(0,imgArray.length-1);
    console.log(randomGenerated);
    arrID[i].src = productCatalogResults[randomGenerated].url;
    arrID[i].alt = productCatalogResults[randomGenerated].name;
    productCatalogResults[randomGenerated].views = productCatalogResults[randomGenerated].views+1;
    console.log (arrID[i].src);
    while (arrID[1].alt === arrID[0].alt || arrID[1].alt === arrID[2].alt){
      randomGenerated = randomNumber(0,imgArray.length-1);
      arrID[1].src = productCatalogResults[randomGenerated].url;
      arrID[1].alt = productCatalogResults[randomGenerated].name;
    }
    while (arrID[2].alt === arrID[0].alt || arrID[2].alt === arrID[1].alt){
      randomGenerated = randomNumber(0,imgArray.length-1);
      arrID[2].src = productCatalogResults[randomGenerated].url;
      arrID[2].alt = productCatalogResults[randomGenerated].name;
    }
  }
}
threeRandoms();

function clickOnProduct(event){
  if(event.target.id === 'firstPicture'){
    numberOfClicks = numberOfClicks + 1;
    var altAttribute = firstPicID.getAttribute('alt');
    var indexNum = imgArrayName.indexOf(altAttribute);
    productCatalogResults[indexNum].clicks = productCatalogResults[indexNum].clicks+1;
    threeRandoms();
  }else if(event.target.id === 'secondPicture'){
    numberOfClicks = numberOfClicks + 1;
    altAttribute = secondPicID.getAttribute('alt');
    console.log(altAttribute);
    indexNum = imgArrayName.indexOf(altAttribute);
    productCatalogResults[indexNum].clicks = productCatalogResults[indexNum].clicks+1;
    threeRandoms();
  }else if(event.target.id === 'thirdPicture'){
    numberOfClicks = numberOfClicks + 1;
    altAttribute = thirdPicID.getAttribute('alt');
    indexNum = imgArrayName.indexOf(altAttribute);
    productCatalogResults[indexNum].clicks = productCatalogResults[indexNum].clicks+1;
    threeRandoms();
  }
  if (numberOfClicks === allowedClicks){
    products.removeEventListener('click', clickOnProduct);
    firstPicID.remove();
    secondPicID.remove();
    thirdPicID.remove();
    data();
  }

}

products.addEventListener('click', clickOnProduct);

function data(){
  for (i=0; i<imgArrayName.length;i++){
    var liEl = document.createElement('li');
    articleID.appendChild(liEl);
    liEl.textContent= `${imgArrayName[i]} had ${productCatalogResults[i].clicks} votes and was shown ${productCatalogResults[i].views} times.`;
  }
}



// HELPER FUNCTION
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
