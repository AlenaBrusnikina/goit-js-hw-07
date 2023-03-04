import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');
const imgMarkup = createsMarkupGalleryItems(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imgMarkup);

function createsMarkupGalleryItems(galleryItems) {
  return galleryItems
    .map((items) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
        class="gallery__image"
        src="${items.preview}"
        alt="${items.description}"
    />
    </a>
</div>`;
    })
    .join('');
}

console.log(imgMarkup);
