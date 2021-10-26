
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css'

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

function createGallery (items) {

    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    }).join('');
 
 }

 const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250});




