import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import content from './interaction-content.json';
import './interactions.css';

const all = (scope, selector) => Array.from(scope.querySelectorAll(selector));
const named = name => '[data-framer-name="' + name + '"]';
const wrap = (n, size) => (n + size) % size;

function enhancePage(language, showPhoto, showLanguages, signal) {
  const copy = content[language];
  const cleanups = [];
  const listen = (target, event, listener, options = {}) => target.addEventListener(event, listener, { ...options, signal });
  const activate = (element, label, action) => {
    element.setAttribute('role', 'button');
    element.tabIndex = 0;
    if (label) element.setAttribute('aria-label', label);
    listen(element, 'click', action);
    listen(element, 'keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); action(e); }
    });
  };
  const repeat = (callback, delay) => {
    const id = setInterval(callback, delay);
    cleanups.push(() => clearInterval(id));
  };

  for (const hero of all(document, '.framer-b51Vm.framer-14ie5dt')) {
    const thumbnails = all(hero, '.framer-s2ftS.framer-fjiz6o');
    const backgrounds = all(hero, '[data-framer-name$=" Background"]').filter(el => el.getAttribute('data-framer-name').startsWith('Slide'));
    const links = all(hero, named('Hero Actions') + ' a');
    let slide = 0, last = Date.now();
    function change(next) {
      last = Date.now();
      slide = wrap(next, copy.slides.length);
      const item = copy.slides[slide];
      for (const [name, value] of [['Location Label', item.eyebrow], ['Hero Headline', item.title], ['Hero Supporting Text', item.description]]) {
        const label = hero.querySelector(named(name) + ' :is(p,h1)');
        if (label) label.textContent = value;
      }
      for (const [index, link] of links.entries()) {
        const label = link.querySelector('[data-framer-name="Label"] p');
        if (label) label.textContent = index ? item.secondary : item.primary;
        link.setAttribute('href', '#' + (index ? item.anchor : 'rooms'));
      }
      thumbnails.forEach((thumb, i) => {
        thumb.style.opacity = i === slide ? '1' : '.6';
        thumb.style.backgroundColor = i === slide ? 'white' : 'transparent';
        thumb.setAttribute('aria-pressed', String(i === slide));
      });
      if (hero.offsetWidth && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const entering = [backgrounds[slide]?.querySelector('img'),
          ...all(hero, ['Hero Headline', 'Hero Supporting Text', 'Location Label'].map(named).join(',')),
          ...thumbnails];
        entering.forEach((element, i) => {
          if (!element) return;
          element.getAnimations().filter(a => a.id === 'slide-entry').forEach(a => a.cancel());
          element.animate([{ opacity: 0, translate: '0 ' + (i ? 16 : 12) + 'px' },
            { opacity: Number(element.style.opacity || 1), translate: '0 0' }],
            { id: 'slide-entry', duration: 650, delay: Math.max(0, i - 3) * 45,
              easing: 'cubic-bezier(.44,0,.56,1)', fill: 'backwards' });
        });
      }
      backgrounds.forEach((bg, i) => bg.dataset.activeSlide = String(i === slide));
    }
    thumbnails.forEach((el, i) => activate(el, copy.slides[i].title, () => change(i)));
    change(0);
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      repeat(() => {
        if (!document.hidden && hero.offsetWidth && hero.getBoundingClientRect().bottom > 0 && Date.now() - last >= 6000 && !hero.contains(document.activeElement)) change(slide + 1);
      }, 500);
    }
  }

  const places = all(document, named('Nearby Place Card - Featured')).filter(el => el.style.transform);
  const contact = all(document, named('Contact Background'));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const motion = places.map(el => {
    const original = el.style.transform;
    const base = original.replace(/translate[XY]\(-?[\d.]+px\)/g, '').trim();
    return { el, original, base, x: Number(original.match(/translateX\((-?[\d.]+)px/)?.[1] || 0),
      y: Number(original.match(/translateY\((-?[\d.]+)px/)?.[1] || 0) };
  });
  let frame = 0;
  function updatePlaces() {
    frame = 0;
    const offsets = motion.map(({el}) => {
      const bounds = el.getBoundingClientRect();
      const currentY = parseFloat(el.dataset.offsetY || 0);
      return reduced.matches ? 0 : Math.max(0, Math.min(1, (bounds.top - currentY - innerHeight * .35) / (innerHeight * .65)));
    });
    motion.forEach(({el, base, x, y}, i) => {
      el.dataset.offsetY = y * offsets[i];
      el.style.transform = base + ' translate(' + x * offsets[i] + 'px,' + y * offsets[i] + 'px)';
    });
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(updatePlaces); }
  listen(window,'scroll',schedule,{passive:true});
  listen(window,'resize',schedule);
  listen(reduced,'change',schedule);
  schedule();
  const entrance = new IntersectionObserver(entries => {
    entries.forEach(({target, isIntersecting}) => {
      if (isIntersecting) { target.classList.add('booking-visible'); entrance.unobserve(target); }
    });
  }, {threshold:.5});
  contact.forEach(el => entrance.observe(el));
  cleanups.push(() => {
    cancelAnimationFrame(frame);
    entrance.disconnect();
    motion.forEach(({el, original}) => { el.style.transform = original; delete el.dataset.offsetY; });
  });

  const answerTemplate = document.querySelector('.framer-1rgymhj')?.cloneNode(true);
  all(document, named('FAQ List')).forEach((list, group) => {
    all(list, named('Question Row')).forEach((trigger, index) => {
      const item = trigger.parentElement;
      const answer = item.querySelector('.framer-1rgymhj') || answerTemplate?.cloneNode(true);
      if (!answer) return;
      const open = item.classList.contains('framer-v-inomsc');
      answer.querySelector('p').textContent = copy.answers[index];
      answer.id = 'answer-' + group + '-' + index;
      trigger.setAttribute('aria-controls', answer.id);
      function toggle(value) {
        item.classList.toggle('framer-v-inomsc', value);
        item.classList.toggle('framer-v-1yxbumz', !value);
        trigger.setAttribute('aria-expanded', String(value));
        trigger.querySelector('use')?.setAttribute('href', value ? '#650073895' : '#465907804');
        if (value) item.append(answer);
        else answer.remove();
      }
      activate(trigger, '', () => toggle(trigger.getAttribute('aria-expanded') !== 'true'));
      toggle(open);
    });
  });

  for (const room of all(document, '.framer-slideshow')) {
    const track = room.querySelector('ul');
    const buttons = all(room, 'button');
    const count = track.children.length;
    let current = 0, last = Date.now(), pointerX = null;
    function move(index) {
      last = Date.now();
      current = wrap(index, count);
      track.style.transform = 'translateX(calc(-' + current * 100 + '% - ' + current * 10 + 'px))';
      buttons.slice(2).forEach((button, i) => {
        button.setAttribute('aria-pressed', String(current === i));
        if (button.firstElementChild) button.firstElementChild.style.opacity = i === current ? '1' : '.5';
      });
    }
    buttons.forEach((button, i) => {
      button.disabled = false;
      listen(button, 'click', () => move(i === 0 ? current - 1 : i === 1 ? current + 1 : i - 2));
    });
    listen(room, 'pointerdown', e => { pointerX = e.clientX; });
    listen(room, 'pointercancel', () => { pointerX = null; });
    listen(room, 'pointerup', e => {
      if (pointerX !== null && Math.abs(e.clientX - pointerX) > 40) move(current + (e.clientX < pointerX ? 1 : -1));
      pointerX = null;
    });
    move(0);
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) repeat(() => {
      const bounds = room.getBoundingClientRect();
      if (!document.hidden && bounds.width && bounds.top < innerHeight && bounds.bottom > 0 && !room.matches(':hover,:focus-within') && Date.now() - last >= 4500) move(current + 1);
    }, 500);
  }

  for (const nav of all(document, 'nav')) {
    const menu = nav.querySelector(named('Mobile Menu'));
    if (menu) {
      function openMenu(open) {
        nav.classList.toggle('framer-v-4ng3xg', open);
        nav.classList.toggle('framer-v-1x1mklb', !open);
        menu.setAttribute('aria-expanded', String(open));
        nav.querySelector(named('Navigation'))?.toggleAttribute('inert', !open);
      }
      activate(menu, language === 'es' ? 'Menú' : 'Menu', () => openMenu(menu.getAttribute('aria-expanded') !== 'true'));
      openMenu(false);
      listen(nav, 'click', e => { if (e.target.closest('a')) openMenu(false); });
      listen(document, 'keydown', e => { if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { openMenu(false); menu.focus(); } });
    }
    const languageButton = nav.querySelector('button[aria-label]');
    if (languageButton) {
      languageButton.setAttribute('aria-haspopup', 'true');
      listen(languageButton, 'click', () => showLanguages(current => current === languageButton ? null : languageButton));
    }
  }

  const gallery = all(document, '.framer-OWLD2.framer-macjk5');
  function openGallery(el) {
    const seen = new Set();
    const photos = [];
    const key = img => (img.getAttribute('srcset')?.split(' ')[0] || img.getAttribute('src')).split('?')[0];
    const active = key(el.querySelector('img'));
    for (const tile of gallery) {
      const img = tile.querySelector('img');
      if (!img || seen.has(key(img))) continue;
      seen.add(key(img));
      photos.push({key:key(img), url:img.getAttribute('src'), alt:img.alt});
    }
    showPhoto({ photos, index: Math.max(0, photos.findIndex(img => img.key === active)) });
  }
  for (const tile of gallery) activate(tile, tile.querySelector('img')?.alt || (language === 'es' ? 'Abrir foto' : 'Open photo'), () => openGallery(tile));

  let activeCard = null;
  const tooltip = document.createElement('aside');
  tooltip.id = 'nearby-place-information';
  tooltip.className = 'nearby-detail';
  tooltip.hidden = true;
  document.body.append(tooltip);
  function closeDetails() {
    activeCard?.setAttribute('aria-expanded', 'false');
    activeCard = null;
    tooltip.hidden = true;
  }
  function positionDetails() {
    if (!activeCard) return;
    const card = activeCard.getBoundingClientRect();
    const popup = tooltip.getBoundingClientRect();
    tooltip.style.left = Math.max(12, Math.min(innerWidth - popup.width - 12, card.left + (card.width - popup.width) / 2)) + 'px';
    const below = card.bottom + 10;
    tooltip.style.top = (below + popup.height <= innerHeight - 10 ? below : Math.max(10, card.top - popup.height - 10)) + 'px';
  }
  const cards = all(document, '.framer-hEZdF.framer-19qm6fm');
  for (const card of cards) {
    const title = card.querySelector(named('Place Name'))?.textContent;
    const place = copy.places.find(place => place.name === title) || copy.places.at(-1);
    function openDetails() {
      closeDetails();
      activeCard = card;
      const category = document.createElement('div');
      category.className = 'place-meta';
      const distance = document.createElement('span');
      distance.textContent = place.distance;
      category.append(place.category, distance);
      const heading = document.createElement('strong');
      heading.textContent = place.name;
      const description = document.createElement('p');
      description.textContent = place.description;
      const travel = document.createElement('div');
      travel.className = 'place-travel';
      const value = document.createElement('b');
      value.textContent = place.travel;
      travel.append(language === 'es' ? 'Desde el hotel' : 'From hotel', value);
      tooltip.replaceChildren(category, heading, description, travel);
      tooltip.hidden = false;
      card.setAttribute('aria-expanded','true');
      positionDetails();
    }
    activate(card, place.name, openDetails);
    card.setAttribute('aria-controls', tooltip.id);
    card.setAttribute('aria-expanded','false');
    listen(card,'pointerenter', e => { if (e.pointerType === 'mouse') openDetails(); });
    listen(card,'pointerleave', e => { if (e.pointerType === 'mouse' && !tooltip.contains(e.relatedTarget)) closeDetails(); });
    listen(card,'focus', openDetails);
    listen(card,'blur', closeDetails);
  }
  listen(tooltip, 'pointerleave', closeDetails);
  listen(document,'keydown', e => { if (e.key === 'Escape') closeDetails(); });
  listen(document,'pointerdown', e => { if (activeCard && !activeCard.contains(e.target) && !tooltip.contains(e.target)) closeDetails(); });
  listen(window,'resize', positionDetails);
  listen(window,'scroll', closeDetails, {passive:true});
  cleanups.push(() => tooltip.remove());

  for (const list of all(document,'ul').filter(ul => ul.querySelector(':scope > .ticker-item'))) {
    const originals = Array.from(list.children);
    const duplicates = originals.map(original => {
      const clone = original.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      const tile = clone.querySelector('.framer-OWLD2');
      if (tile) { tile.tabIndex = -1; listen(tile, 'click', () => openGallery(original.querySelector('.framer-OWLD2'))); }
      list.append(clone);
      return clone;
    });
    list.classList.add('hotel-ticker');
    function measure() {
      const width = duplicates[0].offsetLeft - originals[0].offsetLeft;
      if (width > 0) {
        list.style.setProperty('--ticker-shift', '-' + width + 'px');
        list.style.setProperty('--ticker-time', width / (list.closest('#gallery') ? 30 : 38) + 's');
      }
    }
    if (list.closest('#gallery')) {
      let start = null, startTime = 0, dragged = false;
      const ticker = () => list.getAnimations().find(a => a.animationName === 'hotel-ticker');
      listen(list, 'pointerdown', e => {
        const animation = ticker();
        if (!animation || e.button !== 0) return;
        start = e.clientX;
        startTime = Number(animation.currentTime);
        dragged = false;
      });
      listen(list, 'pointermove', e => {
        const animation = ticker();
        if (start === null || !animation) return;
        const dx = e.clientX - start;
        if (!dragged && Math.abs(dx) < 6) return;
        dragged = true;
        list.setPointerCapture(e.pointerId);
        animation.pause();
        const direction = list.closest('.framer-kauZ4') ? 1 : -1;
        const period = parseFloat(list.style.getPropertyValue('--ticker-time')) * 1000;
        if (period) animation.currentTime = ((startTime + direction * dx * 1000 / 30) % period + period) % period;
      });
      function release() { start = null; if (dragged) ticker()?.play(); }
      listen(window, 'pointerup', release);
      listen(window, 'pointercancel', release);
      listen(list, 'dragstart', e => e.preventDefault());
      listen(list, 'click', e => {
        if (dragged) { e.stopImmediatePropagation(); dragged = false; }
      }, {capture:true});
    }
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    measure();
    cleanups.push(() => { observer.disconnect(); duplicates.forEach(el => el.remove()); });
  }
  return () => cleanups.forEach(fn => fn());
}

export default function SiteInteractions() {
  const [photo, setPhoto] = useState(null);
  const [languageButton, setLanguageButton] = useState(null);
  const dialog = useRef(null);
  const language = location.pathname.startsWith('/es') ? 'es' : 'en';
  const move = step => setPhoto(old => old && ({...old, index:wrap(old.index + step, old.photos.length)}));
  useEffect(() => {
    const controller = new AbortController();
    const cleanup = enhancePage(language, setPhoto, setLanguageButton, controller.signal);
    return () => { controller.abort(); cleanup(); };
  }, [language]);
  useEffect(() => {
    if (!photo || !dialog.current || dialog.current.open) return;
    dialog.current.showModal();
  }, [photo]);
  useEffect(() => {
    if (!languageButton) return;
    const dismiss = e => {
      if ((e.type === 'keydown' && e.key === 'Escape') || (e.type === 'pointerdown' && !languageButton.contains(e.target) && !e.target.closest('.hotel-languages')) || e.type === 'resize') setLanguageButton(null);
    };
    languageButton.setAttribute('aria-expanded','true');
    window.addEventListener('pointerdown', dismiss);
    window.addEventListener('keydown', dismiss);
    window.addEventListener('resize', dismiss);
    return () => {
      languageButton.setAttribute('aria-expanded','false');
      window.removeEventListener('pointerdown', dismiss);
      window.removeEventListener('keydown', dismiss);
      window.removeEventListener('resize', dismiss);
    };
  }, [languageButton]);
  const rect = languageButton?.getBoundingClientRect();
  const english = location.pathname.replace(/^\/es(?=\/|$)/, '') || '/';
  return createPortal(<>
    {languageButton && <div className="hotel-languages" style={{top:rect.bottom + 6, left:Math.min(rect.left, innerWidth - 135)}}>
      <a href={english + location.hash} lang="en">English</a>
      <a href={'/es' + english + location.hash} lang="es">Español</a>
    </div>}
    {photo && <dialog ref={dialog} className="hotel-lightbox" aria-label={language === 'es' ? 'Galería' : 'Hotel gallery'} onClose={() => setPhoto(null)}
      onClick={e => { if (e.target === dialog.current) dialog.current.close(); }}
      onKeyDown={e => { if (e.key === 'ArrowLeft') move(-1); if (e.key === 'ArrowRight') move(1); }}>
      <button className="close" aria-label="Close" onClick={() => dialog.current.close()}>×</button>
      <button className="previous" aria-label="Previous photo" onClick={() => move(-1)}>‹</button>
      <img src={photo.photos[photo.index].url} alt={photo.photos[photo.index].alt} />
      <button className="next" aria-label="Next photo" onClick={() => move(1)}>›</button>
    </dialog>}
  </>, document.body);
}
