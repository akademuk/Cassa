let menuList = document.querySelectorAll(".shopping-menu");

menuList.forEach(function (menu) {
  menu.addEventListener("click", function (e) {
    if (e.target.classList.contains("background-item")) {
      let input = this.querySelector(".input-value");
      input.value = e.target.textContent;
    }
  });
});
