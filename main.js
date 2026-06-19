// ============================================
// Navigation Hamburger Toggle
// ============================================
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// ============================================
// Navigation Scroll Effect
// ============================================
const header = document.querySelector('.site-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
});

// ============================================
// Gallery Lightbox
// ============================================
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');
let focusedElement = null;

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    focusedElement = item;
    const imgSrc = item.querySelector('img').src;
    const imgAlt = item.querySelector('img').alt;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = imgAlt;
    lightbox.classList.add('open');
    lightboxClose.focus();
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  focusedElement?.focus();
}

lightboxClose?.addEventListener('click', closeLightbox);

lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('open')) {
    closeLightbox();
  }
});

// ============================================
// YouTube Video Facade (Click to Load)
// ============================================
const videoFacades = document.querySelectorAll('.video-facade');

videoFacades.forEach(facade => {
  facade.addEventListener('click', function() {
    const videoId = this.dataset.vid;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.title = 'YouTube video player';
    this.innerHTML = '';
    this.appendChild(iframe);
  });
});
