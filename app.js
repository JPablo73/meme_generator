//form variables
const imgUrl = document.querySelector("#imgUrl");
const topText = document.querySelector("#topText");
const bottomText = document.querySelector("#bottomText");
const inputBtn = document.querySelector("button");

// meme container variable
const memeContainer = document.querySelector(".meme-container");

function validateForm(url) {
  // regular expression to check for valid url format
  const urlRegex = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
  if (urlRegex.test(url)) {
    return true;
  } else {
    alert("please enter valid url");
    return false;
  }
}

// adds meme to container bellow form

inputBtn.addEventListener("click", function () {
  // image container
  const imgCard = document.createElement("div");
  imgCard.classList.add("img-card");
  memeContainer.appendChild(imgCard);

  // loads image from url
  const url = imgUrl.value;
  const img = document.createElement("img");
  img.src = url;
  img.classList.add("img-card");

  // creates the image text
  const topInput = document.createElement("p");
  const bottomInput = document.createElement("p");

  topInput.innerHTML = topText.value;
  bottomInput.innerHTML = bottomText.value;

  topInput.classList.add("caption-top", "caption");
  bottomInput.classList.add("caption-bottom", "caption");

  let isFormValidated = validateForm(url);
  if (isFormValidated) {
    imgCard.append(img, topInput, bottomInput);
  } else {
    imgCard.classList.remove("img-card");
  }

  this.form.reset();
});

// removes selected image by double clicking
memeContainer.addEventListener("dblclick", function (e) {
  if (e.target.tagName === "p" || e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
});

// sample images

// https://images.unsplash.com/photo-1610898564097-e28bd69740a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60

// https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60

// https://images.unsplash.com/photo-1561131989-b8112bafbd43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60
