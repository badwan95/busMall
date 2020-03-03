'use strict';
var numberOfClicks = 0;
var allowedClicks = 25;
var firstPicID = document.getElementById('firstPicture');
var secondPicID = document.getElementById('secondPicture');
var thirdPicID = document.getElementById('thirdPicture');
var articleID = document.getElementById('article');
var products = document.getElementById('products');
var imgArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'
];
var imgArrayName = ['Bag', 'Banana', 'Bathroom', 'Boots', 'Breakfast', 'Bubblegum', 'Chair', 'Cthulhu', 'Dog Duck', 'Dragon', 'Pen', 'Pet Sweep', 'Scissors', 'Shark', 'Sweep', 'Tauntaun', 'Unicorn', 'Usb', 'Water Can', 'Wine Glass'];
var productCatalogResults = [];
var savedClicks = [];
var savedViews = [];
var randomNumberArray = [0,0,0,0,0,0];

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

function adding(){
  var randomMadeNumberOne = randomNumber(0,imgArray.length);
  randomNumberArray.unshift(randomMadeNumberOne);
  var randomMadeNumberTwo = randomNumber(0,imgArray.length);
  randomNumberArray.unshift(randomMadeNumberTwo);
  var randomMadeNumberThree = randomNumber(0,imgArray.length);
  randomNumberArray.unshift(randomMadeNumberThree);

  firstPicID.src = productCatalogResults[randomMadeNumberOne].url;
  firstPicID.alt = productCatalogResults[randomMadeNumberOne].name;
  productCatalogResults[randomMadeNumberOne].views = productCatalogResults[randomMadeNumberOne].views+1;

  secondPicID.src = productCatalogResults[randomMadeNumberTwo].url;
  secondPicID.alt = productCatalogResults[randomMadeNumberTwo].name;
  productCatalogResults[randomMadeNumberTwo].views = productCatalogResults[randomMadeNumberTwo].views+1;

  thirdPicID.src = productCatalogResults[randomMadeNumberThree].url;
  thirdPicID.alt = productCatalogResults[randomMadeNumberThree].name;
  productCatalogResults[randomMadeNumberThree].views = productCatalogResults[randomMadeNumberThree].views+1;

  //Make sure unique picture every time on same page
  while (firstPicID.alt === secondPicID.alt || firstPicID.alt === thirdPicID.alt ){
    randomNumberArray.shift();
    randomMadeNumberOne = randomNumber(0,imgArray.length);
    randomNumberArray.unshift(randomMadeNumberOne);
    firstPicID.src = productCatalogResults[randomMadeNumberOne].url;
    firstPicID.alt = productCatalogResults[randomMadeNumberOne].name;
    productCatalogResults[randomMadeNumberOne].views = productCatalogResults[randomMadeNumberOne].views+1;
  }
  while (secondPicID.alt === firstPicID.alt || secondPicID.alt === thirdPicID.alt ){
    randomNumberArray.shift();
    randomMadeNumberTwo = randomNumber(0,imgArray.length);
    randomNumberArray.unshift(randomMadeNumberTwo);
    secondPicID.src = productCatalogResults[randomMadeNumberTwo].url;
    secondPicID.alt = productCatalogResults[randomMadeNumberTwo].name;
    productCatalogResults[randomMadeNumberTwo].views = productCatalogResults[randomMadeNumberTwo].views+1;
  }
  while (thirdPicID.alt === firstPicID.alt || thirdPicID.alt === secondPicID.alt ){
    randomNumberArray.shift();
    randomMadeNumberThree = randomNumber(0,imgArray.length);
    randomNumberArray.unshift(randomMadeNumberThree);
    thirdPicID.src = productCatalogResults[randomMadeNumberThree].url;
    thirdPicID.alt = productCatalogResults[randomMadeNumberThree].name;
    productCatalogResults[randomMadeNumberThree].views = productCatalogResults[randomMadeNumberThree].views+1;
  }
  //Unique numbers every page:
  while (randomNumberArray.includes(randomMadeNumberOne) === false){
    console.log(randomNumberArray);
    randomNumberArray.shift();
    randomMadeNumberOne = randomNumber(0,imgArray.length);
    randomNumberArray.unshift(randomMadeNumberOne);
    console.log(randomNumberArray);
    firstPicID.src = productCatalogResults[randomMadeNumberOne].url;
    firstPicID.alt = productCatalogResults[randomMadeNumberOne].name;
    productCatalogResults[randomMadeNumberOne].views = productCatalogResults[randomMadeNumberOne].views+1;
  }
  while (randomNumberArray.includes(randomMadeNumberTwo === false)){
    randomNumberArray.shift();
    randomMadeNumberTwo = randomNumber(0,imgArray.length);
    randomNumberArray.unshift(randomMadeNumberTwo);
    secondPicID.src = productCatalogResults[randomMadeNumberTwo].url;
    secondPicID.alt = productCatalogResults[randomMadeNumberTwo].name;
    productCatalogResults[randomMadeNumberTwo].views = productCatalogResults[randomMadeNumberTwo].views+1;
  }
  while (randomNumberArray.includes(randomMadeNumberThree) === false){
    randomNumberArray.shift();
    randomMadeNumberThree = randomNumber(0,imgArray.length);
    randomNumberArray.unshift(randomMadeNumberThree);
    thirdPicID.src = productCatalogResults[randomMadeNumberThree].url;
    thirdPicID.alt = productCatalogResults[randomMadeNumberThree].name;
    productCatalogResults[randomMadeNumberThree].views = productCatalogResults[randomMadeNumberThree].views+1;
  }


  randomNumberArray.pop();
  randomNumberArray.pop();
  randomNumberArray.pop();
}
adding();




// function threeRandoms(){
//   for (i=0; i<arrID.length;i++){
//     var randomMadeNumber = randomNumber(0,imgArray.length);
//     var randomGenerated = randomMadeNumber;
//     randomNumberArray.unshift(randomGenerated);
//     randomNumberArray.pop();
//     console.log(randomGenerated);
//     arrID[i].src = productCatalogResults[randomGenerated].url;
//     arrID[i].alt = productCatalogResults[randomGenerated].name;
//     productCatalogResults[randomGenerated].views = productCatalogResults[randomGenerated].views+1;
//     console.log (arrID[i].src);
//     while (arrID[1].alt === arrID[0].alt || arrID[1].alt === arrID[2].alt){
//       randomGenerated = randomNumber(0,imgArray.length);
//       arrID[1].src = productCatalogResults[randomGenerated].url;
//       arrID[1].alt = productCatalogResults[randomGenerated].name;
//     }
//     while (arrID[2].alt === arrID[0].alt || arrID[2].alt === arrID[1].alt){
//       randomGenerated = randomNumber(0,imgArray.length);
//       arrID[2].src = productCatalogResults[randomGenerated].url;
//       arrID[2].alt = productCatalogResults[randomGenerated].name;
//     }
//   }

// }
// threeRandoms();

function clickOnProduct(event){
  if(event.target.id === 'firstPicture'){
    numberOfClicks = numberOfClicks + 1;
    var altAttribute = firstPicID.getAttribute('alt');
    var indexNum = imgArrayName.indexOf(altAttribute);
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
    data();
    savingClicksAndViews();
    drawChart();
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



function savingClicksAndViews(){
  for (i=0 ; i < productCatalogResults.length ; i++){
    savedClicks.push(productCatalogResults[i].clicks);
    savedViews.push(productCatalogResults[i].views);
  }
}






// HELPER FUNCTION
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function drawChart(){
  var ctx = document.getElementById('productsChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
      labels: imgArrayName,
      datasets: [{
        label: 'Number of Clicks',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(5, 5, 5)',
        data: savedClicks},{
        label: 'Number of Views',
        backgroundColor: 'rgb(1, 250, 209)',
        borderColor: 'rgb(5, 5, 5)',
        data: savedViews
      }

      ]
    },
    // Configuration options go here
    options: {}
  });
}
