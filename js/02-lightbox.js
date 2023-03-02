import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');
const imgMarkup = createsMarkupGalleryItems(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imgMarkup);

function createsMarkupGalleryItems(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
</div>`;
    })
    .join('');
}

console.log(imgMarkup);