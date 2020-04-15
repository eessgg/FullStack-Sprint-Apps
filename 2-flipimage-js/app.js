(function () {
  const imageContainer = document.querySelectorAll(".image-container");
  const btnFlip = document.querySelectorAll('[data-js="buttonflip"]');

  btnFlip.forEach(function (btn) {
    const parent = btn.parentElement.previousElementSibling;
    // btn.value === "HOR" ? console.log("on") : console.log("no");

    btn.addEventListener("click", function () {
      if (btn.value === "HOR") {
        parent.classList.toggle("flip-horizontal");
      }
      if (btn.value === "VER") {
        parent.classList.toggle("flip-vertical");
      }
    });
  });

  const url = "./data.json";

  function fetchJSON(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  window.addEventListener("onload", fetchJSON(url));
})();
