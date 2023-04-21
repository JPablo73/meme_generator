const imgUrl = document.querySelector("#imgUrl");
const topText = document.querySelector("#topText");
const bottomText = document.querySelector("#bottomText");
const inputBtn = document.querySelector("button");

inputBtn.addEventListener("click", function () {
  const url = imgUrl.value;
  const topInput = topText.value;
  const bottomInput = bottomText.value;
  console.log(url, topInput, bottomInput);
  this.form.reset();
});
