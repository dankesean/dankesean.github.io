document.addEventListener("DOMContentLoaded", function() {
  console.log("Random GIF script loaded!"); // confirm script runs

  const gifs = [
    "1.gif","2.gif","3.gif","4.gif","5.gif","6.gif","7.gif","8.gif"
  ];

  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
  const gifElement = document.getElementById("profile-gif");

  if (gifElement) {
    // Use direct path that works on GitHub Pages
    gifElement.src = "/images/" + randomGif;
  }
});