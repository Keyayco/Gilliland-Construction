// Gilliland Construction — Vanilla JS
(function () {
  // Year
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Nav scroll state
  var nav = document.getElementById('nav');
  var heroBg = document.getElementById('heroBg');
  function onScroll() {
    if (window.scrollY > 20) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
    if (heroBg) heroBg.style.transform = 'translate3d(0,' + (window.scrollY * 0.35) + 'px,0)';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('open');
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { btn.classList.remove('open'); menu.classList.remove('open'); });
    });
  }

  // Reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }
})();
