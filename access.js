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
