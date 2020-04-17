const imageContainer = document.querySelectorAll(".image-container");
const btnFlip = document.querySelectorAll('[data-js="buttonflip"]');
const url = "./data.json";

btnFlip.forEach(function (btn) {
  const parent = btn.parentElement.previousElementSibling;
  btn.addEventListener("click", function () {
    if (btn.value === "HORIZONTAL") {
      parent.classList.toggle("flip-horizontal");
      setTimeout(function () {
        parent.classList.remove("flip-horizontal");
      }, 1000);
    }
    if (btn.value === "VERTICAL") {
      parent.classList.toggle("flip-vertical");
      setTimeout(function () {
        parent.classList.remove("flip-vertical");
      }, 1000);
    }
    if (btn.value === "ROTATE") {
      parent.classList.toggle("flip-rotate");
      setTimeout(function () {
        parent.classList.remove("flip-rotate");
      }, 1000);
    }
  });
});

function fetchJSON(url) {
  fetch(url)
    .then((response) => response.json())
    .then(data => createImageBox(data))
    .catch((err) => console.log(err));
}

function createImageBox(data) {
  let parks = data.parks;
  let output;
  const gallery = document.querySelector(".gallery");

  parks.map(item => {
    output += `
        <div class="image-box">
          <div class="image-container">
            <div class="image-inner">
              <div class="image-front">
                <img src=${item.image} alt=${item.name} />
              </div>
              <div class="image-back">
                <h3>${item.name} </h3>
                <p>Localizado: ${item.location} </p>
                <p> ${item.description}</p>
              </div>
            </div>
          </div>
          <div class="controls">
            <input type="button" data-js="buttonflip" name="horiz" value="HORIZONTAL" />
            <input type="button" data-js="buttonflip" name="vert" value="VERTICAL" />
            <input type="button" data-js="buttonflip" name="rotate" value="ROTATE" />
          </div>
        </div>
      `;
  })
  return gallery.innerHTML += output;
}

document.addEventListener("onload", fetchJSON(url));
