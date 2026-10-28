# Malta en Familia — guía de publicación y monetización

Blog estático (HTML + CSS + algo de JavaScript). No necesita servidor ni base de datos:
se publica gratis en GitHub Pages.

---

## PARTE 1 · Publicar el blog (gratis, ~30 minutos)

### Paso 1. Crear la cuenta de GitHub
1. Ve a **github.com** y pulsa *Sign up*.
2. Usa tu correo y elige un nombre de usuario (aparecerá en la URL provisional).
3. Es gratis; no hace falta ningún plan de pago.

### Paso 2. Crear el repositorio
1. Botón **+** (arriba a la derecha) y luego *New repository*.
2. Nombre: `maltaenfamilia`
3. Marca **Public** (Pages gratuito solo funciona en repositorios públicos).
4. *Create repository*.

### Paso 3. Subir los archivos
1. En el repositorio vacío: **Add file → Upload files**.
2. Descomprime el zip del blog en tu ordenador y **arrastra TODO el contenido**
   (los .html, la carpeta `assets/` y la carpeta `apps/`).
   Ojo: arrastra el *contenido* de la carpeta, no la carpeta entera.
3. Abajo del todo, *Commit changes*.

### Paso 4. Activar GitHub Pages
1. Pestaña **Settings** del repositorio y, en el menú izquierdo, **Pages**.
2. *Source*: **Deploy from a branch**.
3. *Branch*: `main`, carpeta `/ (root)`, y **Save**.
4. Espera 1-2 minutos y recarga: aparecerá la dirección
   `https://TUUSUARIO.github.io/maltaenfamilia/`

Con esto el blog ya está publicado y accesible para cualquiera.

### Paso 5 (opcional, recomendable). Dominio propio, unos 10 euros al año
Da mucha más credibilidad y es casi imprescindible para que te aprueben en los programas
de afiliados y en AdSense.

1. Compra el dominio en **Cloudflare Registrar** (precio de coste, sin subidas en la
   renovación) o en Namecheap. Por ejemplo: `maltaenfamilia.com`.
2. En el panel DNS de Cloudflare crea:
   - 4 registros **A** para el dominio raíz, apuntando a:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - 1 registro **CNAME** para `www` apuntando a `TUUSUARIO.github.io`
   - En modo **DNS only** (nube gris), no en modo proxy.
3. En GitHub: Settings → Pages → *Custom domain* → escribe tu dominio → Save.
4. Cuando se active, marca **Enforce HTTPS**.

### Paso 6. Que Google te encuentre
1. Entra en **Google Search Console** (gratis) y añade tu dominio.
2. Verifica la propiedad (Cloudflare lo permite con un registro TXT; la propia
   herramienta te guía).
3. Envía el sitio para indexación. Tardará unos días en empezar a aparecer.

---

## PARTE 2 · Monetizar, por orden de rentabilidad real

Publica primero y solicita los programas después: todos revisan la web antes de
aprobarte, y una web vacía significa rechazo casi seguro. Con el blog tal como está
(15 páginas, experiencia real, fotos propias) tienes de sobra.

### 1. Afiliación de viajes, lo más rentable para este blog

| Programa | Dónde solicitarlo | Comisión orientativa | Notas |
|---|---|---|---|
| GetYourGuide | partner.getyourguide.com | ~8 % por actividad | Aprobación rápida |
| Civitatis | civitatis.com, sección afiliados | ~7-10 % | Público hispanohablante: convierte mejor |
| Booking | vía Travelpayouts o CJ | 4 % de estancias completadas | Ya no admite altas directas pequeñas |
| IATI Seguros | iatiseguros.com, afiliados | Comisión por póliza y 5 % de descuento para tu lector | Alta conversión |
| Heymondo | heymondo.com, partners | Similar | Alternativa a IATI |

**Travelpayouts** es el atajo: con un alta agrupa Booking, GetYourGuide y otros, con
panel y pagos unificados.

### 2. Amazon Afiliados
- Alta en **afiliados.amazon.es**. Te dan un *tag* (por ejemplo `maltafamilia-21`).
- Atención: exigen **3 ventas en los primeros 180 días** o cierran la cuenta. Conviene
  solicitarlo cuando ya tengas algo de tráfico, no el primer día.

### 3. Google AdSense, el último de la lista
- Requiere dominio propio, contenido original suficiente y las páginas legales (aviso
  legal, privacidad y cookies), que ya están hechas.
- Cifras reales: 1.000 visitas al mes equivalen a entre 1 y 5 euros. No compensa hasta
  varios miles de visitas mensuales.
- Antes de activarlo necesitas un **banner de consentimiento de cookies** (obligatorio en
  la UE). Hay soluciones gratuitas como Cookiebot o Klaro.

---

## PARTE 3 · Activar tus enlaces de afiliado

Los 43 botones del blog (en 11 páginas) están ya preparados. Cuando te aprueben:

1. Abre el archivo **`assets/afiliados.js`**.
2. Busca el bloque de la plataforma y pega tu identificador entre las comillas:

       getyourguide: { id: 'AQUI_TU_PARTNER_ID', ... }

3. Guarda y sube el archivo a GitHub (Add file → Upload files, sobrescribiendo).

Todos los botones de esa plataforma quedan monetizados a la vez.

**Regla de oro:** nunca copies un enlace de Amazon o de una tienda obtenido navegando.
Suelen llevar el identificador de otro afiliado (`tag=...`) y la comisión iría a esa
persona, no a ti.

---

## PARTE 4 · Hacer crecer el tráfico

- **Foros y grupos:** Los Viajeros (losviajeros.com), foro de TripAdvisor de Malta,
  grupos de Facebook "Españoles en Malta", "Viajar a Malta" y los de celiacos viajeros.
  Regla: aporta primero respondiendo dudas, enlaza después y solo cuando venga a cuento.
- **Tus ángulos diferenciales**, con poca competencia en español y búsquedas constantes:
  estudiar inglés en Malta en familia, Malta sin gluten, y precios reales de una
  estancia larga.
- **Constancia:** un artículo nuevo cada dos o tres semanas vale más que diez de golpe.

---

## Mantenimiento

- Para editar un texto: entra al archivo en GitHub, pulsa el lápiz, edita y guarda.
- Para añadir fotos: súbelas a `assets/img/` con el mismo nombre que usa el HTML.
- Fotos con licencia CC: cita siempre al autor concreto, no basta con "Wikimedia Commons".
- Anota el año junto a los precios: evita que el blog envejezca mal.
