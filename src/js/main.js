const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}
window.addEventListener('load', () => {
  let portfolioContainer = select('.mf-glry__container');
  if (portfolioContainer) {
    let glryIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.mf-glry__item'
    });

    let glryFilters = select('#mf-glry__fltrs li', true);

    on('click', '#mf-glry__fltrs li', function(e) {
      e.preventDefault();
      glryFilters.forEach(function(el) {
        el.classList.remove('is-active');
      });
      this.classList.add('is-active');

      glryIsotope.arrange({
        filter: this.getAttribute('data-filter')
      });
    }, true);
  }
});
const glryLightbox = GLightbox({
  selector: '.glry-lightbox'
});