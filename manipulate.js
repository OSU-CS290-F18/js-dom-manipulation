var photoCardContainer = document.getElementById('photo-card-container');

var userSuppliedContent = "<img src=x onerror=\"alert('Uh oh!');\">";

// photoCardContainer.innerHTML = userSuppliedContent;

function insertNewPhotoCard(imgURL, caption) {
  var photoCardSection = document.createElement('section');

  photoCardSection.classList.add('photo-card');
  // photoCardSection.setAttribute('id', 'the-new-photo-card');
  // photoCardSection.style['background-color'] = "green";
  // photoCardSection.style.border = "10px dashed magenta";
  // photoCardSection.classList.remove('photo-card');
  // photoCardSection.classList.toggle('photo-card');

  // photoCardSection.textContent = userSuppliedContent;

  var imgContainerDiv = document.createElement('div');
  imgContainerDiv.classList.add('img-container');
  photoCardSection.appendChild(imgContainerDiv);

  var personPhotoImg = document.createElement('img');
  personPhotoImg.classList.add('person-photo-img');
  personPhotoImg.src = imgURL;
  imgContainerDiv.appendChild(personPhotoImg);

  var captionDiv = document.createElement('div');
  captionDiv.classList.add('caption');
  captionDiv.textContent = caption;
  photoCardSection.appendChild(captionDiv);

  console.log("photoCardSection:", photoCardSection);
  photoCardContainer.appendChild(photoCardSection);
}

insertNewPhotoCard("http://placekitten.com/480/480?image=7", "Luke as a cat");
insertNewPhotoCard("http://placekitten.com/480/480?image=9", "Luke as a cat");

var lastPhotoCard = photoCardContainer.lastChild;
// lastPhotoCard.remove();
lastPhotoCard.parentNode.removeChild(lastPhotoCard);
