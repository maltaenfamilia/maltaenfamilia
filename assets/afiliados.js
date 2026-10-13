/* ============================================================
   MALTA EN FAMILIA · Configuración de enlaces de afiliado
   ------------------------------------------------------------
   ESTE ES EL ÚNICO ARCHIVO QUE TIENES QUE EDITAR cuando te
   aprueben en cada programa. Todos los botones del sitio se
   actualizan solos.

   Cómo funciona: cada botón del blog lleva un atributo
   data-red (la plataforma) y data-destino (a dónde apunta).
   Este script construye el enlace final añadiendo tu ID.

   Mientras un ID esté vacío, el botón sigue funcionando y
   lleva al sitio oficial: no pierdes visitas, solo comisión.
   ============================================================ */

const AFILIADOS = {

  // ---------- GETYOURGUIDE ----------
  // Alta: partner.getyourguide.com  →  te dan un "partner_id"
  // Ejemplo de enlace final: ...?partner_id=XXXXX
  getyourguide: {
    id: '',                                   // ← pega aquí tu partner_id
    base: 'https://www.getyourguide.es',
    parametro: 'partner_id'
  },

  // ---------- CIVITATIS ----------
  // Alta: www.civitatis.com/es/afiliados/
  // Te dan un identificador que va en el parámetro "aid"
  civitatis: {
    id: '',                                   // ← pega aquí tu ID
    base: 'https://www.civitatis.com',
    parametro: 'aid'
  },

  // ---------- BOOKING (vía Travelpayouts o CJ) ----------
  // Travelpayouts te da un enlace completo con tu marker.
  // Pega aquí el marker que te asignen.
  booking: {
    id: '',                                   // ← pega aquí tu marker
    base: 'https://www.booking.com',
    parametro: 'aid'
  },

  // ---------- SEGUROS ----------
  // IATI: programa propio; te dan una URL con tu código.
  // Heymondo: igual. Pega la URL COMPLETA que te faciliten.
  iati:     { url: 'https://www.iatiseguros.com' },
  heymondo: { url: 'https://www.heymondo.es' },

  // ---------- AMAZON ----------
  // Alta: afiliados.amazon.es → te dan un "tag" (ej. maltafamilia-21)
  amazon: {
    id: '',                                   // ← pega aquí tu tag
    base: 'https://www.amazon.es',
    parametro: 'tag'
  },

  // ---------- ALIEXPRESS ----------
  // Programa de afiliados de AliExpress o red Admitad.
  aliexpress: {
    id: '',
    base: 'https://es.aliexpress.com',
    parametro: 'aff_trace_key'
  }
};

/* ------------------------------------------------------------
   Construcción automática de los enlaces
   ------------------------------------------------------------ */
(function () {
  document.querySelectorAll('[data-red]').forEach(function (el) {
    const red = el.dataset.red;
    const destino = el.dataset.destino || '';
    const cfg = AFILIADOS[red];
    if (!cfg) return;

    let url;
    if (cfg.url) {                 // seguros: URL directa
      url = cfg.url;
    } else {
      url = cfg.base + destino;
      if (cfg.id) {
        url += (url.indexOf('?') === -1 ? '?' : '&') + cfg.parametro + '=' + cfg.id;
      }
    }
    el.setAttribute('href', url);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'sponsored noopener');   // exigido por Google
  });
})();
