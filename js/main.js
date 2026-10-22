/* Felipe Lima — portfólio. Lê tudo de content.js (window.SITE). */
(() => {
  'use strict';

  const SITE = window.SITE;
  if (!SITE) return;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const isPhone = () => window.matchMedia('(max-width: 760px)').matches;
  const hasGsap = typeof window.gsap !== 'undefined';

  const get = (path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), SITE);

  const el = (tag, attrs = {}, children = []) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === 'class') node.className = v;
      else if (k === 'text') node.textContent = v;
      else node.setAttribute(k, v === true ? '' : v);
    }
    for (const c of [].concat(children)) if (c) node.append(c);
    return node;
  };
  const icon = (id) => {
    const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('aria-hidden', 'true');
    const u = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    u.setAttribute('href', `#${id}`);
    s.append(u);
    return s;
  };

  /* ---------- Textos e links ---------- */
  $$('[data-text]').forEach((n) => { n.textContent = get(n.dataset.text) ?? ''; });
  $$('[data-year]').forEach((n) => { n.textContent = new Date().getFullYear(); });

  const c = SITE.contato;
  const waHref = `https://wa.me/${c.whatsappNumero}?text=${encodeURIComponent(c.whatsappMensagem)}`;
  $$('[data-wa]').forEach((a) => { a.href = waHref; a.target = '_blank'; a.rel = 'noopener'; });
  $$('[data-ig]').forEach((a) => { a.href = c.instagramUrl; });

  const photo = $('[data-hero-photo]');
  photo.src = SITE.pessoa.foto;
  photo.alt = SITE.pessoa.fotoAlt;

  // Menu: barra, celular e o anel ao redor da foto.
  const linksBox = $('[data-menu-links]');
  const menuList = $('[data-menu-list]');
  const orbit = $('[data-orbit]');
  SITE.menu.forEach((m) => {
    linksBox.append(el('a', { href: m.alvo, text: m.rotulo }));
    menuList.append(el('li', {}, el('a', { href: m.alvo, text: m.rotulo })));
    orbit.append(el('a', { href: m.alvo, text: m.rotulo, tabindex: '-1' }));
  });

  /* ---------- Mídia: vídeo (toca no hover / na rolagem) ---------- */
  const players = [];

  function media({ video, poster, imagem, label, alt, semSom }) {
    const isVideo = Boolean(video);
    const isSlot = !video && !imagem;
    const tag = isVideo ? 'button' : 'div';
    const box = el(tag, {
      class: 'media',
      type: isVideo ? 'button' : null,
      'aria-label': isVideo ? `${semSom ? 'Assistir em tela cheia' : 'Assistir com som'}: ${label}` : null,
    });
    const still = imagem || poster;
    if (still) box.append(el('img', { src: still, alt: isVideo ? '' : (alt || ''), loading: 'lazy', decoding: 'async' }));
    if (isVideo) {
      const v = el('video', { muted: true, loop: true, playsinline: true, preload: 'none', poster, 'aria-hidden': 'true' });
      v.muted = true;
      v.dataset.src = video;
      box.append(v, el('span', { class: 'media__play' }, semSom
        ? [icon('i-play'), el('span', { text: 'Ver em tela cheia' })]
        : [icon('i-sound'), el('span', { text: 'Ver com som' })]));
      players.push({ box, v });
      box.addEventListener('click', () => openPlayer({ video, poster, label, semSom }));
    } else if (isSlot || (!imagem && poster)) {
      // Quadro reservado para um vídeo que ainda vai ser enviado.
      box.append(el('span', { class: 'media__tag', text: 'Vídeo em breve' }));
    }
    return box;
  }

  function startVideo(box, v) {
    if (!v.src) v.src = v.dataset.src;
    const p = v.play();
    if (p && p.then) p.then(() => box.classList.add('is-playing')).catch(() => {});
  }
  function stopVideo(box, v) {
    v.pause();
    box.classList.remove('is-playing');
  }

  /* ---------- 2. Serviços ---------- */
  const sl = $('[data-services]');
  SITE.servicos.itens.forEach((s) => sl.append(el('li', { text: s })));

  /* ---------- 3. Trabalhos ---------- */
  const workGrid = $('[data-work]');
  SITE.trabalhos.itens.forEach((it) => {
    workGrid.append(el('li', { class: 'work__item' }, el('figure', {}, [
      media({ video: it.video, poster: it.poster, label: it.cliente, semSom: it.semSom }),
      el('figcaption', { text: it.cliente }),
    ])));
  });

  /* ---------- 4. Cases (como no PDF: celular + imagens) ---------- */
  const list = $('[data-cases]');
  const caseNav = $('[data-casenav-list]');
  SITE.cases.itens.forEach((cs) => {
    caseNav.append(el('li', {}, el('a', { href: `#case-${cs.id}`, text: cs.nome })));

    const head = el('header', { class: 'case__head' }, [
      cs.logo ? el('img', { class: 'case__logo', src: cs.logo, alt: `Logo ${cs.nome}`, loading: 'lazy' }) : null,
      el('h3', { class: 'case__name', text: cs.nome }),
      el('span', { class: 'line case__rule', 'aria-hidden': 'true' }),
    ]);
    const text = cs.texto && cs.texto.length
      ? el('div', { class: 'case__text' }, cs.texto.map((t) => el('p', { text: t })))
      : el('div', { class: 'case__text' });

    const cel = cs.celular || {};
    const phone = el('div', { class: 'phone' }, media({
      video: cel.video, poster: cel.poster, imagem: cel.imagem, label: cel.legenda || cs.nome, alt: cel.legenda || cs.nome, semSom: cel.semSom,
    }));
    const gallery = el('div', { class: `gallery gallery--${cs.formato || 'grade'}`, style: cs.proporcao ? `--ratio: ${cs.proporcao.toFixed(4)}` : null },
      (cs.imagens || []).map((src, i) => el('figure', {}, el('img', { src, alt: `${cs.nome}, trabalho ${i + 1}`, loading: 'lazy', decoding: 'async' }))));

    list.append(el('article', { class: 'case', id: `case-${cs.id}` }, [
      el('span', { class: 'line case__top', 'aria-hidden': 'true' }),
      el('div', { class: 'case__body' }, [phone, gallery]),
      el('div', { class: 'case__info' }, [head, text]),
    ]));
  });

  /* ---------- 5. Resultados ---------- */
  const rl = $('[data-results]');
  SITE.resultados.itens.forEach((r) => {
    rl.append(el('div', { class: 'results__row' }, [el('dt', { text: r.numero }), el('dd', { text: r.texto })]));
  });

  /* ---------- Vídeos: hover no desktop, rolagem no celular ---------- */
  if (players.length) {
    if (canHover) {
      players.forEach(({ box, v }) => {
        box.addEventListener('pointerenter', () => startVideo(box, v));
        box.addEventListener('pointerleave', () => stopVideo(box, v));
        box.addEventListener('focus', () => startVideo(box, v));
        box.addEventListener('blur', () => stopVideo(box, v));
      });
    } else if (!reduceMotion && 'IntersectionObserver' in window) {
      const map = new Map(players.map((p) => [p.box, p.v]));
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          const v = map.get(en.target);
          if (en.isIntersecting && en.intersectionRatio >= 0.6) startVideo(en.target, v);
          else stopVideo(en.target, v);
        });
      }, { threshold: [0, 0.6] });
      players.forEach(({ box }) => io.observe(box));
    }
  }

  /* ---------- Player em tela cheia, com som ---------- */
  const dlg = $('[data-player]');
  const stage = $('[data-player-stage]');
  const caption = $('[data-player-caption]');
  let lastFocus = null;
  let lenis = null;

  function openPlayer({ video, poster, label, semSom }) {
    lastFocus = document.activeElement;
    players.forEach(({ box, v }) => stopVideo(box, v));
    const v = el('video', { src: video, poster, controls: true, playsinline: true, autoplay: true, preload: 'auto' });
    stage.replaceChildren(v);
    v.muted = Boolean(semSom);
    if (semSom) v.setAttribute('muted', '');
    v.play().catch(() => {});
    caption.textContent = label || '';
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
    if (lenis) lenis.stop();
  }
  function closePlayer() {
    const v = $('video', stage);
    if (v) { v.pause(); v.removeAttribute('src'); v.load(); }
    stage.replaceChildren();
    if (dlg.open) dlg.close();
  }
  $('[data-player-close]').addEventListener('click', closePlayer);
  dlg.addEventListener('click', (e) => { if (e.target === dlg || e.target === stage) closePlayer(); });
  dlg.addEventListener('close', () => {
    const v = $('video', stage);
    if (v) v.pause();
    stage.replaceChildren();
    if (lenis) lenis.start();
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  });

  /* ---------- Rolagem suave ---------- */
  if (!reduceMotion && typeof window.Lenis === 'function') {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    if (hasGsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }

  const nav = $('[data-nav]');
  const navH = () => nav.offsetHeight;
  function goTo(hash) {
    const target = hash === '#topo' ? 0 : $(hash);
    if (target == null) return;
    const extra = target !== 0 && target.closest && target.closest('#cases') && target.id !== 'cases' ? 56 : 0;
    if (lenis) lenis.scrollTo(target, { offset: target === 0 ? 0 : -(navH() + extra) + 1, duration: 1.4 });
    else if (target === 0) window.scrollTo({ top: 0 });
    else target.scrollIntoView();
  }
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const hash = a.getAttribute('href');
    if (hash.length < 2) return;
    e.preventDefault();
    if (!menu.hidden) toggleMenu(false);
    goTo(hash);
  });

  /* ---------- Menu do celular ---------- */
  const menu = $('[data-menu]');
  const toggle = $('[data-menu-toggle]');
  function toggleMenu(open) {
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Fechar' : 'Menu';
    document.body.style.overflow = open ? 'hidden' : '';
    if (lenis) (open ? lenis.stop() : lenis.start());
    if (open && hasGsap && !reduceMotion) {
      gsap.fromTo($$('.menu__list li', menu), { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'expo.out' });
    }
    if (open) $('a', menu).focus({ preventScroll: true });
  }
  toggle.addEventListener('click', () => toggleMenu(menu.hidden));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { toggleMenu(false); toggle.focus(); } });

  /* ---------- Barra: fundo sólido, botão fixo, seção e case ativos ---------- */
  const dock = $('[data-dock]');
  const hero = $('.hero');
  const finalSec = $('#contato');
  function onScroll() {
    const y = window.scrollY;
    const heroH = hero.offsetHeight;
    nav.classList.toggle('is-solid', y > heroH * 0.45);
    const fr = finalSec.getBoundingClientRect();
    dock.classList.toggle('is-on', y > heroH * 0.85 && fr.top > window.innerHeight * 0.75);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if ('IntersectionObserver' in window) {
    const links = $$('a', linksBox);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === `#${en.target.id}`));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['#sobre', '#trabalhos', '#cases', '#resultados'].forEach((id) => { const s = $(id); if (s) io.observe(s); });

    const caseLinks = $$('a', caseNav);
    const marker = el('span', { class: 'casenav__marker', 'aria-hidden': 'true' });
    caseNav.append(marker);
    const moveMarker = (l) => {
      marker.style.width = `${l.offsetWidth}px`;
      marker.style.transform = `translateX(${l.offsetLeft}px)`;
      marker.classList.add('is-on');
    };
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        caseLinks.forEach((l) => {
          const on = l.getAttribute('href') === `#${en.target.id}`;
          l.classList.toggle('is-active', on);
          if (on) {
            moveMarker(l);
            caseNav.scrollTo({ left: l.offsetLeft - 24, behavior: 'smooth' });
          }
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    $$('.case').forEach((s) => cio.observe(s));
  }

  /* ---------- Anel do menu ao redor da foto ---------- */
  // Ângulos (graus, sentido horário a partir da direita) de cada item sobre a elipse.
  const ANGLES_DESK = [236, 168, 304, 12, 52];
  // no celular: dois itens acima do nome, dois sobre os ombros, um embaixo
  const ANGLES_PHONE = [250, 160, 290, 20, 115];
  const INSIDE_PHONE = [false, true, false, true, true];
  const orbitLinks = $$('a', orbit);
  const ellipse = $('.orbit-line');

  function orbitPoints() {
    // no celular o anel é mais largo e mais baixo
    const geo = isPhone() ? { cy: 56, rx: 40, ry: 34 } : { cy: 56, rx: 33, ry: 41 };
    const r = hero.getBoundingClientRect();
    const cx = 0.5 * r.width;
    const cy = (geo.cy / 100) * r.height;
    const rx = (geo.rx / 100) * r.width;
    const ry = (geo.ry / 100) * r.height;
    // o SVG usa as medidas reais em pixels, para o traço ser desenhado por inteiro
    ellipse.ownerSVGElement.setAttribute('viewBox', `0 0 ${r.width} ${r.height}`);
    ellipse.setAttribute('cx', cx);
    ellipse.setAttribute('cy', cy);
    ellipse.setAttribute('rx', rx);
    ellipse.setAttribute('ry', ry);
    const angles = isPhone() ? ANGLES_PHONE : ANGLES_DESK;
    return orbitLinks.map((a, i) => {
      const t = (angles[i % angles.length] * Math.PI) / 180;
      // no celular alguns textos ficam do lado de dentro do anel, sobre a roupa escura
      const outside = Math.cos(t) < 0;
      const inside = isPhone() && INSIDE_PHONE[i % INSIDE_PHONE.length];
      return { x: cx + rx * Math.cos(t), y: cy + ry * Math.sin(t), left: inside ? !outside : outside };
    });
  }
  function placeOrbit() {
    const pts = orbitPoints();
    orbitLinks.forEach((a, i) => {
      const p = pts[i];
      a.classList.toggle('is-left', p.left);
      const w = a.offsetWidth;
      const h = a.offsetHeight;
      // o quadradinho fica exatamente sobre a linha
      const vw = document.documentElement.clientWidth;
      const x = p.left ? p.x - w + 3.5 : p.x - 3.5;
      a.style.left = `${Math.min(Math.max(x, 8), vw - w - 8)}px`;
      a.style.top = `${p.y - h / 2}px`;
    });
  }
  // Destino de cada item na barra (link correspondente, ou o botão "Menu" no celular).
  function orbitTarget(i) {
    const navLink = $$('a', linksBox)[i];
    const r = navLink && navLink.offsetParent ? navLink.getBoundingClientRect() : toggle.getBoundingClientRect();
    const a = orbitLinks[i];
    const ar = { left: parseFloat(a.style.left), top: parseFloat(a.style.top), w: a.offsetWidth, h: a.offsetHeight };
    // alinha o texto do item com o texto do link (o quadradinho some no caminho)
    const textOffset = a.classList.contains('is-left') ? 0 : 17;
    return { x: r.left - ar.left - textOffset, y: r.top + r.height / 2 - (ar.top + ar.h / 2) };
  }

  placeOrbit();
  window.addEventListener('resize', placeOrbit);

  /* ---------- Movimento ---------- */
  const done = () => document.documentElement.classList.add('intro-done');

  if (!hasGsap || reduceMotion) {
    done();
    orbit.remove();
    return;
  }

  const ST = window.ScrollTrigger;
  gsap.registerPlugin(ST);
  nav.classList.add('is-orbiting');

  // O menu sai do anel e sobe para a barra conforme a rolagem.
  const orbitTl = gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: () => `+=${hero.offsetHeight * 0.5}`,
      scrub: 0.6,
      invalidateOnRefresh: true,
      onLeave: () => { nav.classList.remove('is-orbiting'); orbit.classList.add('is-gone'); },
      onEnterBack: () => { nav.classList.add('is-orbiting'); orbit.classList.remove('is-gone'); },
    },
  });
  orbitLinks.forEach((a, i) => {
    orbitTl.to(a, { x: () => orbitTarget(i).x, y: () => orbitTarget(i).y, ease: 'power2.inOut', duration: 1 }, i * 0.04);
  });
  orbitTl.to(orbitLinks, { opacity: 0, duration: 0.2, ease: 'none' }, 0.9);
  orbitTl.to('.hero__orbit', { opacity: 0, ease: 'none', duration: 0.7 }, 0);
  ST.addEventListener('refreshInit', placeOrbit);

  // Profundidade no topo: o nome sobe mais devagar que a foto.
  gsap.to('.hero__name', { yPercent: -30, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to(photo, { scale: 0.94, transformOrigin: '50% 100%', ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });

  // Títulos: cada palavra sobe dentro de uma máscara.
  function splitWords(node) {
    const words = node.textContent.trim().split(/\s+/);
    node.textContent = '';
    words.forEach((w, i) => {
      node.append(el('span', { class: 'word' }, el('span', { text: w })));
      if (i < words.length - 1) node.append(' ');
    });
    return $$('.word > span', node);
  }
  function splitChars(node) {
    const text = node.textContent;
    node.setAttribute('aria-label', text);
    node.textContent = '';
    [...text].forEach((ch) => node.append(el('span', { class: ch === ' ' ? 'char char--space' : 'char', 'aria-hidden': 'true', text: ch === ' ' ? ' ' : ch })));
    return $$('.char', node);
  }

  // Revelação diagonal, no ângulo das lâminas do logo.
  const CLIP_FROM = 'polygon(0% 0%, 0% 0%, -60% 100%, -60% 100%)';
  const CLIP_TO = 'polygon(0% 0%, 160% 0%, 100% 100%, -60% 100%)';

  function sectionReveals() {
    $$('.section__head .line, .case__rule, .case__top, .final__line').forEach((ln) => {
      gsap.from(ln, { scaleX: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: ln, start: 'top 90%' } });
    });
    $$('.section .h2, .final__title').forEach((h) => {
      gsap.from(splitWords(h), { yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: 0.06, scrollTrigger: { trigger: h, start: 'top 88%' } });
    });

    gsap.from('.statement', { y: 24, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: '.statement', start: 'top 85%' } });
    gsap.from('.services__title, .services__list li', { y: 20, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.07, scrollTrigger: { trigger: '.services', start: 'top 85%' } });

    // Trabalhos: os quatro vídeos abrem em diagonal, um após o outro.
    const tiles = $$('.work__item .media');
    gsap.fromTo(tiles, { clipPath: CLIP_FROM }, { clipPath: CLIP_TO, duration: 1.2, ease: 'expo.inOut', stagger: 0.09, scrollTrigger: { trigger: '.work__grid', start: 'top 85%' } });
    gsap.from('.work__item figcaption', { y: 12, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.09, delay: 0.4, scrollTrigger: { trigger: '.work__grid', start: 'top 85%' } });

    // Cada case: título, texto, celular sobe, imagens entram em sequência.
    $$('.case').forEach((cs) => {
      const trig = { trigger: cs, start: 'top 78%' };
      gsap.from($$('.case__logo, .case__name', cs), { y: 22, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.06, scrollTrigger: trig });
      const ps = $$('.case__text p', cs);
      if (ps.length) gsap.from(ps, { y: 18, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.07, delay: 0.1, scrollTrigger: trig });
      gsap.from($('.phone', cs), { y: 40, opacity: 0, duration: 1.1, ease: 'expo.out', delay: 0.15, scrollTrigger: trig });
      gsap.fromTo($$('.gallery figure', cs), { clipPath: CLIP_FROM }, { clipPath: CLIP_TO, duration: 1.1, ease: 'expo.inOut', stagger: 0.06, delay: 0.25, scrollTrigger: trig });
    });

    $$('.results__row').forEach((row) => {
      gsap.from(row.children, { y: 22, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: row, start: 'top 88%' } });
    });

    // Final: o logo se desenha em linhas finas e depois se acende em vermelho.
    const mark = $('.final__mark');
    const traces = $$('.trace', mark);
    gsap.set(traces, { strokeDashoffset: 1 });
    gsap.timeline({ scrollTrigger: { trigger: '.final', start: 'top 70%' } })
      .to(traces, { strokeDashoffset: 0, duration: 1.8, ease: 'expo.inOut', stagger: 0.18 })
      .add(() => mark.classList.add('is-filled'), '-=0.2');
    gsap.from($$('.final__text > *:not(.final__title)'), { y: 22, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: '.final__text', start: 'top 80%' } });
  }

  /* ---------- Abertura (a cada carregamento) ---------- */
  // Ritmo da referência: fundo vazio → a marca é desenhada traço a traço → ganha cor
  // → voa para o canto da barra enquanto o site se revela.
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  const intro = $('.intro');
  const introMark = $('.intro__mark');
  const slabs = $$('.slab', introMark);
  const navMark = $('.nav__mark');
  const nameChars = splitChars($('.hero__name'));
  const heroBits = $$('.hero__role, .hero__cta, .hero__scroll');

  if (lenis) lenis.stop();
  gsap.set(navMark, { opacity: 0 });
  gsap.set(ellipse, { strokeDashoffset: 1 });
  gsap.set(orbitLinks, { opacity: 0 });

  const tl = gsap.timeline();
  window.__flIntro = tl;

  tl
    // 1. traço: cada lâmina é desenhada pela linha
    .to(slabs, { strokeDashoffset: 0, duration: 1.15, ease: 'power2.inOut', stagger: 0.28 }, 0.35)
    // 2. cor: o preenchimento surge de dentro do desenho
    .to(slabs, { fillOpacity: 1, duration: 0.7, ease: 'power1.out', stagger: 0.2 }, 1.25)
    .to(slabs, { strokeOpacity: 0, duration: 0.4 }, 2.0)
    // 3. a marca vai para o canto da barra
    .add(() => {
      // mede só o desenho (sem a margem do traço), para pousar exatamente sobre o logo da barra
      const svg = introMark.getBoundingClientRect();
      const rs = slabs.map((s) => s.getBoundingClientRect());
      const art = { left: Math.min(...rs.map((r) => r.left)), top: Math.min(...rs.map((r) => r.top)), bottom: Math.max(...rs.map((r) => r.bottom)) };
      const b = navMark.getBoundingClientRect();
      const s = b.height / (art.bottom - art.top);
      // o GSAP assume o "translate: -50% -50%" do CSS nos valores de x/y; por isso a metade da caixa entra na conta
      gsap.to(introMark, {
        x: b.left - svg.left - svg.width / 2 - (art.left - svg.left) * s,
        y: b.top - svg.top - svg.height / 2 - (art.top - svg.top) * s,
        scale: s,
        duration: 1.2,
        ease: 'power3.inOut',
        force3D: true,
        onComplete: () => {
          gsap.set(navMark, { opacity: 1 });
          gsap.set(introMark, { opacity: 0 });
          done();
        },
      });
    }, 2.3)
    // 4. o fundo da abertura sai em diagonal, no ângulo do logo
    .fromTo('.intro__bg',
      { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 190%)' },
      { clipPath: 'polygon(0% 0%, 100% 0%, 100% -90%, 0% 0%)', duration: 1.25, ease: 'expo.inOut' }, 2.35)
    // 5. o topo entra
    .from(photo, { yPercent: 8, scale: 1.04, opacity: 0, duration: 1.6, ease: 'expo.out' }, 2.75)
    .from(nameChars, { yPercent: 100, opacity: 0, duration: 1.2, ease: 'expo.out', stagger: 0.035 }, 2.7)
    .to(ellipse, { strokeDashoffset: 0, duration: 1.8, ease: 'expo.inOut' }, 2.8)
    .from('.hero__diag', { scaleX: 0, duration: 1.4, ease: 'expo.inOut' }, 3.0)
    .to(orbitLinks, { opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.08 }, 3.2)
    .from(heroBits, { y: 16, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.08 }, 3.2)
    .from('.nav__name, .nav__links, .nav__cta, .nav__toggle', { y: -10, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.05 }, 3.1)
    .from('.nav__line', { scaleX: 0, duration: 1.3, ease: 'expo.inOut' }, 3.0)
    .add(() => { if (lenis) lenis.start(); }, 3.5)
    .add(() => { done(); gsap.set(navMark, { opacity: 1 }); }, 3.7);

  // Clique, toque ou tecla pulam a abertura.
  const skip = () => { if (tl.progress() < 0.75) tl.progress(1); };
  ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((ev) => window.addEventListener(ev, skip, { once: true, passive: true }));

  sectionReveals();
  window.addEventListener('load', () => { placeOrbit(); ST.refresh(); });
})();
