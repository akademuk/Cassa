let inputValue = document.querySelector(".input-value");
let inputArray = document.querySelectorAll(
  ".input-array .item .background-item"
);

inputArray.forEach((x) => {
  x.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.parentElement.querySelector(
      ".input-value"
    ).value = e.target.innerText;
  });
});
