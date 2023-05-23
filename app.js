// Form variables
const imgUrlInput = document.querySelector("#imgUrl");
const topTextInput = document.querySelector("#topText");
const bottomTextInput = document.querySelector("#bottomText");
const inputBtn = document.querySelector("button");

// Meme container variable
const memeContainer = document.querySelector(".meme-container");

function validateUrl(url) {
  const urlRegex = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
  return urlRegex.test(url);
}

function createMemeCard(url, topText, bottomText) {
  const imgCard = document.createElement("div");
  imgCard.classList.add("img-card");

  const img = document.createElement("img");
  img.src = url;
  img.classList.add("img-card");

  const topCaption = document.createElement("p");
  topCaption.textContent = topText;
  topCaption.classList.add("caption-top", "caption");

  const bottomCaption = document.createElement("p");
  bottomCaption.textContent = bottomText;
  bottomCaption.classList.add("caption-bottom", "caption");

  imgCard.append(img, topCaption, bottomCaption);
  memeContainer.appendChild(imgCard);
}

inputBtn.addEventListener("click", function () {
  const url = imgUrlInput.value;
  const topText = topTextInput.value;
  const bottomText = bottomTextInput.value;

  if (validateUrl(url)) {
    createMemeCard(url, topText, bottomText);
  } else {
    alert("Please enter a valid URL.");
  }

  this.form.reset();
});

memeContainer.addEventListener("dblclick", function (e) {
  if (e.target.matches("p, img")) {
    e.target.parentElement.remove();
  }
});

// sample images from unsplash.com

// https://images.unsplash.com/photo-1610898564097-e28bd69740a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60

// https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60

// https://images.unsplash.com/photo-1561131989-b8112bafbd43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60
