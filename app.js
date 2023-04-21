const imgUrl = document.querySelector("#imgUrl");
const topText = document.querySelector("#topText");
const bottomText = document.querySelector("#bottomText");
const inputBtn = document.querySelector("button");

const imgContainer = document.querySelector(".img-container");

inputBtn.addEventListener("click", function () {
  const url = imgUrl.value;
  const topInput = topText.value;
  const bottomInput = bottomText.value;
  console.log(topInput, bottomInput);

  const img = document.createElement("img");
  img.src = url;
  img.classList.add("img-card");
  imgContainer.appendChild(img);

  this.form.reset();
});

// images

// https://images.unsplash.com/photo-1610898564097-e28bd69740a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60

// https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60

// https://images.unsplash.com/photo-1561131989-b8112bafbd43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60
