/* ==========================================================
   Malta en Familia — consentimiento de cookies
   ----------------------------------------------------------
   Los scripts de terceros (Travelpayouts Drive) NO se cargan
   hasta que la persona acepta. Rechazar es tan fácil como
   aceptar: un solo clic, al mismo nivel y con el mismo peso
   visual, como exige el RGPD.

   La decisión se guarda en el navegador de cada visitante
   (localStorage) durante 6 meses. Pasado ese plazo se vuelve
   a preguntar.
   ========================================================== */
(function () {
  'use strict';

  var CLAVE = 'mef-cookies';
  var MESES = 6;
  var POLITICA = 'cookies.html';

  /* ---- Scripts que dependen del consentimiento ---------- */
  function cargarTerceros() {
    if (document.getElementById('tp-drive')) return;   // ya cargado
    var s = document.createElement('script');
    s.id = 'tp-drive';
    s.async = 1;
    s.setAttribute('data-cmp-ab', '2');
    s.src = 'https://tpembars.com/NTg1MDkx.js?t=585091';
    document.head.appendChild(s);
  }

  /* ---- Lectura y escritura de la decisión --------------- */
  function leer() {
    try {
      var d = JSON.parse(localStorage.getItem(CLAVE));
      if (!d || !d.fecha) return null;
      var caduca = new Date(d.fecha);
      caduca.setMonth(caduca.getMonth() + MESES);
      return new Date() > caduca ? null : d.valor;   // caducado = volver a preguntar
    } catch (e) {
      return null;   // modo privado o almacenamiento bloqueado
    }
  }

  function guardar(valor) {
    try {
      localStorage.setItem(CLAVE, JSON.stringify({
        valor: valor,
        fecha: new Date().toISOString()
      }));
    } catch (e) { /* si no se puede guardar, se preguntará de nuevo */ }
  }

  /* ---- El banner ---------------------------------------- */
  function cerrar() {
    var b = document.getElementById('banner-cookies');
    if (b) b.parentNode.removeChild(b);
    document.removeEventListener('keydown', escapeNo);
  }

  function decidir(valor) {
    guardar(valor);
    cerrar();
    if (valor === 'aceptado') cargarTerceros();
  }

  function escapeNo(e) {
    // Escape equivale a rechazar: nunca a aceptar por omisión.
    if (e.key === 'Escape') decidir('rechazado');
  }

  function mostrar() {
    var enRaiz = !/\/apps\//.test(location.pathname);
    var ruta = enRaiz ? POLITICA : '../' + POLITICA;

    var b = document.createElement('div');
    b.id = 'banner-cookies';
    b.className = 'banner-cookies';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-modal', 'false');
    b.setAttribute('aria-label', 'Aviso de cookies');
    b.innerHTML =
      '<div class="bc-inner">' +
        '<div class="bc-texto">' +
          '<strong>Una cosa rápida sobre las cookies.</strong> ' +
          'Usamos cookies de terceros para que funcionen los enlaces de afiliados con los que ' +
          'se mantiene este blog. Si las rechazáis, el blog funciona exactamente igual: ' +
          'todo el contenido, los mapas y la audioguía siguen disponibles. ' +
          '<a href="' + ruta + '">Más detalle en la política de cookies</a>.' +
        '</div>' +
        '<div class="bc-botones">' +
          '<button type="button" class="bc-btn bc-rechazar">Rechazar</button>' +
          '<button type="button" class="bc-btn bc-aceptar">Aceptar</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(b);
    b.querySelector('.bc-aceptar').addEventListener('click', function () { decidir('aceptado'); });
    b.querySelector('.bc-rechazar').addEventListener('click', function () { decidir('rechazado'); });
    document.addEventListener('keydown', escapeNo);
    b.querySelector('.bc-rechazar').focus();
  }

  /* ---- Permitir cambiar de opinión más tarde ------------ */
  // Lo usa el enlace "Cookies" del pie y el botón de la política.
  window.mefCookies = {
    reabrir: function () {
      try { localStorage.removeItem(CLAVE); } catch (e) {}
      if (!document.getElementById('banner-cookies')) mostrar();
    },
    estado: leer
  };

  // Los enlaces de "cambiar" funcionan siempre, haya o no decisión guardada.
  function engancharCambiar() {
    var cambiar = document.querySelectorAll('[data-cookies="cambiar"]');
    for (var i = 0; i < cambiar.length; i++) {
      cambiar[i].addEventListener('click', function (e) {
        e.preventDefault();
        window.mefCookies.reabrir();
      });
    }
  }

  function iniciar() {
    engancharCambiar();
    var decision = leer();
    if (decision === 'aceptado') cargarTerceros();
    else if (decision === null) mostrar();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
