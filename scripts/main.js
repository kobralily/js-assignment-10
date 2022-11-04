let monkey = document.getElementById('plush');
let borders = ["#FB2914", "#FB8E14", "#FFF003", "#7DFF37", "#37FFD2", "#3777FF", "#8337FF", "#FF37DE", "#000"];

monkey.onclick = (e) => {
  let color = Math.floor(Math.random() * borders.length);
  e.target.style.borderColor = borders[color];
}


let image = document.getElementById('uncoolCat');
let uncoolCat = "images/cat-on-mtg.jpg";
let coolCat = "images/cat-mtg-cool.jpg";

image.onmouseenter = (e) => {
  e.target.setAttribute('src', coolCat);
};

image.onmouseleave = (e) => {
  e.target.setAttribute('src', uncoolCat);
}
