const gallery = document.getElementById('gallery');
const loadBtn = document.getElementById('loadBtn');

function getRandomImageUrl() {
  const randomId = Math.floor(Math.random() * 1000); // Random number for image
  return `https://picsum.photos/200?random=${randomId}`; // You can use Lorem Picsum instead of Lorem Pixel (which is often down)
}

function loadImages() {
  gallery.innerHTML = ''; // Clear previous images
  for (let i = 0; i < 6; i++) {
    const img = document.createElement('img');
    img.src = getRandomImageUrl();
    gallery.appendChild(img);
  }
}

loadBtn.addEventListener('click', loadImages);

// Load images on first page load
window.onload = loadImages;
