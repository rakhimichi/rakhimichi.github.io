const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice) {
  const previewBox = document.getElementById("image-preview");
  const galleryImages = document.querySelectorAll(".gallery-grid img");

  galleryImages.forEach(image => {
    image.addEventListener("mouseenter", function () {
      const rect = image.getBoundingClientRect();

      if (window.innerWidth - rect.right > 320) {
        previewBox.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
        previewBox.style.display = "block";
      }
    });

    image.addEventListener("mouseleave", function () {
      previewBox.style.display = "none";
    });
  });
}