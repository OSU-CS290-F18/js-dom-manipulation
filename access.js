var body = document.body;
console.log("body:", body);

console.log("body.childNodes:", body.childNodes);
for (var i = 0; i < body.childNodes.length; i++) {
  console.log("body.childNodes[" + i + "]:", body.childNodes[i]);
}

console.log("body.firstChild:", body.firstChild);
console.log("body.lastChild:", body.lastChild);

var bodyFirstChild = body.firstChild;
console.log("bodyFirstChild.nextSibling:", bodyFirstChild.nextSibling);
console.log("bodyFirstChild.previousSibling:", bodyFirstChild.previousSibling);

console.log("bodyFirstChild.parentNode:", bodyFirstChild.parentNode);

var elem = body;
while (elem) {
  console.log("elem:", elem);
  elem = elem.firstChild;
}

var photoCardContainer = document.getElementById('photo-card-container');
console.log("photoCardContainer:", photoCardContainer);

var photoCards = document.getElementsByClassName('photo-card');
console.log("photoCards:", photoCards);

for (var i = 0; i < photoCards.length; i++) {
  console.log("photoCards[" + i + "]:", photoCards[i]);
  // photoCards[i].remove();
}

var links = document.getElementsByTagName('a');
console.log("links:", links);

var rightNavitem = document.querySelector('.navitem.right');
console.log("rightNavitem:", rightNavitem);

var firstPersonImage = document.querySelector('img.person-photo-img');
console.log("firstPersonImage:", firstPersonImage);

var allPersonImages = document.querySelectorAll('img.person-photo-img');
console.log("allPersonImages:", allPersonImages);

console.log("rightNavitem.textContent:", rightNavitem.textContent);
console.log("rightNavitem.innerHTML:", rightNavitem.innerHTML);

console.log("firstPersonImage.src:", firstPersonImage.src);
console.log("links[0].href:", links[0].href);

var loremCard = photoCardContainer.querySelector('.lorem-card');
console.log("loremCard.clientWidth:", loremCard.clientWidth);
console.log("loremCard.clientHeight:", loremCard.clientHeight);

console.log("loremCard.offsetWidth:", loremCard.offsetWidth);
console.log("loremCard.offsetHeight:", loremCard.offsetHeight);

console.log("loremCard.scrollWidth:", loremCard.scrollWidth);
console.log("loremCard.scrollHeight:", loremCard.scrollHeight);

console.log("loremCard.getBoundingClientRect():", loremCard.getBoundingClientRect());
