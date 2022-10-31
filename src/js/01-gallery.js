import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainerRef = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function createGalleryItemsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
         <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'Alt',
  captionDelay: 250,
});
