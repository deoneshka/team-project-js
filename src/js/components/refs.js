export default {
  filmList: document.querySelector('.films-list'),
  body: document.querySelector('body'),
  onMovieClick: document.querySelector('.js-film-list'),
  modal: document.querySelector('.js-open-modal'),
  modalContaier: document.querySelector('.js-modal'),
  modalPoster: document.querySelector('.js-poster'),
  lightBox: document.querySelector('.overlay'),
  closeBtn: document.querySelector('.js-close-btn'),
  inputValue: document.querySelector('#js-input'),
  errorText: document.querySelector('#js-input-error'),
  header: document.querySelector('.header'),
  activeLink: document.querySelector('.navigation__list'),
  homeButton: document.querySelector('[data-tab="home"]'),
  libraryButton: document.querySelector('[data-tab="library"]'),
  searchContainer: document.querySelector('#js-search'),
  libraryContainer: document.querySelector('#js-buttons'),
  paginationRef: document.getElementById('pagination'),
  authOpenBtn: document.querySelector('.authorization__main-btn'),
  authModal: document.querySelector('.authorization__backdrop'),
  authContainerForHTML: document.querySelector(
    '.authorization__modal-container',
  ),
  authCloseBtn: document.querySelector('.authorization__close-btn'),
  libraryWatchedBtn: document.querySelector('.js-library-watched'),
  libraryQueueBtn: document.querySelector('.js-library-queue'),
};