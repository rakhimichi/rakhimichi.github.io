let previewBox = document.getElementById("image-preview");
let galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(function(image) {
  image.addEventListener("mouseenter", function() {
    previewBox.innerHTML = "<img src='" + image.src + "' alt='" + image.alt + "'>";
    previewBox.style.display = "block";
  });
  image.addEventListener("mouseleave", function() {
    previewBox.style.display = "none";
  });
});