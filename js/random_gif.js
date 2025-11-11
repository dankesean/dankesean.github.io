const gifs = [
  "/images/1.gif",
  "/images/2.gif",
  "/images/3.gif",
  "/images/4.gif",
  "/images/5.gif",
  "/images/6.gif",
  "/images/7.gif",
  "/images/8.gif"
];

const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
const img = document.getElementById('profile-gif');
if (img) {
  img.src = randomGif;
}