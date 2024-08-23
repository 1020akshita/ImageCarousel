const images = [
  "https://img.freepik.com/free-photo/green-texture_1160-674.jpg?ga=GA1.1.1435560903.1724303509&semt=ais_hybrid",
  "https://img.freepik.com/free-vector/realistic-green-leaves-background_23-2149552087.jpg?ga=GA1.1.1435560903.1724303509&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/abstract-blurred-background-with-plants-generative-ai_169016-30180.jpg?ga=GA1.1.1435560903.1724303509&semt=ais_hybrid",
];

let currentIndex = 0;
const container = document.querySelector(".container");
function displayImage(index) {
  container.innerHTML = "";
  const imgElement = document.createElement("img");
  imgElement.src = images[index];
  container.appendChild(imgElement);
}

displayImage(currentIndex);

function prev() {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
  displayImage(currentIndex);
}

function next() {
  currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  displayImage(currentIndex);
}
