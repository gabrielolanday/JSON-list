let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [
  {
    "name" : "Sapphire Radeon RX 5700",
    "team" : "#800000",
    "picture_url" : "https://images-na.ssl-images-amazon.com/images/I/81HXQR3JRoL._SL1500_.jpg",
    "price" : ["Amazon - $369.99","Newegg - $359.99"]
  },
  {
    "name" : "EVGA GeForce RTX 2070 XC Gaming",
    "team" : "#009933",
    "picture_url" : "https://images-na.ssl-images-amazon.com/images/I/71WA8Pm9AoL._SL1200_.jpg",
    "price" : ["Amazon - $479.99","Newegg - $529.99"]
  },
  {
    "name" : "XFX Radeon RX 5700 XT",
    "team" : "#800000",
    "picture_url" : "https://images-na.ssl-images-amazon.com/images/I/81qg8HYyW4L._SL1500_.jpg",
    "price" : ["Amazon - $459.99","Newegg - $449.99"]
  },
  {
    "name" : "ASUS ROG STRIX GeForce RTX 2070 SUPER Advanced Overclocked",
    "team" : "#009933",
    "picture_url" : "https://images-na.ssl-images-amazon.com/images/I/51e1br3dXdL.jpg",
    "price" : ["Amazon - $584.99","Newegg - $584.99"]
  }

]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementBase(jsonDatabase[i]);
}

function createElementBase(incomingJSON) {

  let newElement = document.createElement("DIV");
  newElement.style.backgroundColor = incomingJSON['team'];
  newElement.classList.add('contentItem');

  let newHeading = document.createElement("H3");
  newHeading.classList.add('contentTitle');
  newHeading.innerHTML = incomingJSON['name'];
  newElement.appendChild(newHeading);

  let newSubhead = document.createElement("H4");
  newSubhead.innerHTML = "Price:";
  newElement.appendChild(newSubhead);

  let newPrice = document.createElement("UL");
  newElement.appendChild(newPrice);

  for (var i = 0; i < incomingJSON['price'].length; i++) {
    var currentPrice = incomingJSON['price'][i];
    var newPriceItem = document.createElement("LI");
    newPriceItem.innerHTML = currentPrice;
    newPrice.appendChild(newPriceItem);
  }

  let newImageContainer = document.createElement("DIV");
  newImageContainer.classList.add("footerImageContainer");
  newImageContainer.style.backgroundImage = "url('" + incomingJSON['picture_url'] + "')";
  newElement.appendChild(newImageContainer);
  contentGridElement.appendChild(newElement);

}
