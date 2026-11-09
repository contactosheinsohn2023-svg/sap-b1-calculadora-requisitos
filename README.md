# SAP B1 - Calculadora de Requisitos

Calculadora HTML de una sola página (sin dependencias de servidor) para dimensionar hardware de SAP Business One 10 — App Server, DB Server (SQL Server o HANA) y PC de usuario — según Feature Package, tipo de despliegue, usuarios, add-ons y arquitectura de conexión cliente.

Archivos vivos (desde v3.0 la parte visual y la funcional van separadas):

- [`index.html`](./index.html): estructura de la página (pantalla de bienvenida, panel de configuración, barra de acciones, diálogo del informe). No tiene estilos ni lógica adentro.
- [`styles.css`](./styles.css): toda la parte visual (colores, tipografía, móvil, impresión del informe). Cambiar aquí no altera ningún cálculo.
- [`app.js`](./app.js): toda la parte funcional. Secciones, en orden: STATE (estado), FP DEFINITIONS, PLATFORM MATRICES (`SW_SQL` / `SW_HANA`), CALC (fórmulas de App Server, SQL y HANA), HELPERS, RENDER (arma los resultados), CONTROLS (botones del panel), BIENVENIDA E INFORME (v3.0, solo navegación e informe) e INIT.

Regla del proyecto: las fórmulas y matrices de `app.js` son las que funcionan y solo se cambian cuando Ghost lo pide.
- [`pruebas.html`](./pruebas.html): prueba automática. Abre la calculadora, corre 6 casos fijos (SQL y HANA, nueva y actualización, App Server y PC de usuario) y 5 textos, y dice PASA o FALLA. Abrirla después de cualquier cambio (en GitHub Pages: `.../pruebas.html`; en local, con un servidor como `py -m http.server`). Los valores esperados solo se cambian cuando Ghost aprueba un cambio de fórmula.
- `?v=3.0` en los enlaces a `styles.css` y `app.js` dentro de `index.html`: se sube en cada versión para que el navegador no mezcle el HTML nuevo con un CSS o JS viejo guardado en caché.

## Cómo se usa (v3.0)

1. Bienvenida, paso 1: elegir el motor (Microsoft SQL Server o SAP HANA).
2. Bienvenida, paso 2: elegir Instalación nueva o Actualización.
3. Se abre la calculadora con esa selección ya hecha; el resto (Feature Package, despliegue, conexión, usuarios, add-ons, tamaño de BD) se ajusta en el panel. El botón "← Inicio" vuelve a la bienvenida.
4. "Generar informe" pide a quién va dirigido y la fecha, arma un encabezado con esos datos y la configuración, y abre la ventana de impresión (se puede guardar como PDF). El texto del informe queda por definir. En línea, en vivo: **https://contactosheinsohn2023-svg.github.io/sap-b1-calculadora-requisitos/**

## Aprendizaje general reutilizable: tooltips cortados por overflow del contenedor padre

**Síntoma:** un tooltip o menú posicionado con `position:absolute` dentro de un contenedor que tiene `overflow-y:auto` (o `scroll`) aparece cortado en un borde, aunque el contenedor no tenga `overflow-x` declarado.

**Causa raíz:** en CSS, si se declara solo `overflow-y` con un valor distinto de `visible`, el navegador computa `overflow-x` como `auto` automáticamente (así lo exige la spec). Eso convierte al contenedor en un "clipping ancestor" en ambos ejes, y cualquier descendiente `position:absolute` que se salga del borde horizontal queda recortado, aunque visualmente el contenedor solo parezca scrollear verticalmente.

**Solución:** cambiar el elemento flotante a `position:fixed` (así escapa del overflow clipping de los ancestros) y calcular su posición en JS con `getBoundingClientRect()` del elemento que lo dispara, en un handler `onmouseenter` (o focus):
- Centrar horizontalmente respecto al ícono/trigger, pero con `Math.max`/`Math.min` para no salirse de los bordes del viewport.
- Decidir arriba/abajo según el espacio disponible (si no cabe arriba, mostrarlo abajo), con una clase CSS (`tip-above` / `tip-below`) que mueve también la flechita del tooltip.
- Guardar la posición de la flecha como variable CSS (`--arrow-left`) para que no quede descentrada al clamear el tooltip contra el borde.

**Condición para que funcione:** `position:fixed` solo escapa la clipping del ancestro si ningún ancestro tiene `transform`, `filter`, `will-change` o `perspective` distinto de `none` (esas propiedades crean su propio "containing block" y vuelven a atrapar el `fixed`). Verificar eso antes de aplicar la solución.

**Dónde más puede aparecer:** cualquier UI con paneles laterales scrolleables (listas, formularios largos) que tengan tooltips, dropdowns custom o menús contextuales flotantes — es un patrón común en dashboards y formularios de configuración, no solo en esta calculadora.

**Caso donde apareció:** tooltip de ayuda del ícono ⓘ "Buffer Pool" en el panel lateral de esta calculadora (panel con `.main{overflow-y:auto}`). Antes de la corrección, el tooltip aparecía cortado del lado izquierdo (texto empezando a mitad de palabra).

## Historial de cambios

- **2026-11-09 (v3.0):** Parte visual y funcional separadas en `styles.css` y `app.js` (antes todo iba dentro de `index.html`). Nueva pantalla de bienvenida en dos pasos (motor → tipo de instalación) que llama a las mismas funciones `selectDB` y `selectTipo` del panel. Botón "Generar informe" con diálogo (Dirigido a, Fecha) y vista de impresión que oculta el panel y los botones. Fórmulas, matrices y textos de resultados sin cambios: los mismos 3 casos de prueba dan el mismo hash SHA-256 del texto de resultados que v2.3 y v2.4. Etiqueta "v3.0 · nov 2026". Correcciones de la auditoría (2026-11-09): (1) la nota de RAM de SQL en actualización usa el % de Buffer Pool elegido (antes decía 40 % siempre); (2) en modo PC de usuario, los usuarios del App Server no pasan del total (antes 1 total y 3 en App Server daba "-2 usuarios restantes"; único cambio de lógica, aprobado por Ghost); (3) en HANA ya no salen "Auth. SQL modo mixto" ni la collation de SQL Server en Prerrequisitos; (4) la nota de HANA nueva muestra la RAM recomendada y la mínima calculadas (antes decía "mínima 128 GB" aunque con más de 40 usuarios el cálculo da 256 GB); (5) el subtítulo del servidor de BD ya no repite el tamaño de la BD; (6) nueva `pruebas.html`. (7) En modo PC de usuario, si todos los usuarios van por App Server ya no sale el bloque "0 equipos" ni la frase "Los 0 usuarios restantes" (segunda auditoría). El logo de la barra sigue siendo el texto "SAP" y no la imagen oficial: el logo de SAP es marca registrada y su uso por terceros requiere licencia de SAP. Barra superior de vuelta al azul SAP (#0070f2), como pidió Ghost.
- **2026-11-06 (v2.4):** Rediseño visual (estilos, jerarquía, estados, móvil) y favicon con la identidad visual Ghost. Sin cambios de cálculo.

- **2026-10-23 (v2.3):** En HANA, la tabla de SUSE ahora lista cada Service Pack de SLES 15 con su estado: SP7 "VIGENTE" y los demás "FUERA DE SOPORTE GENERAL". Fechas (SUSE / endoflife.date): SP5 soporte general hasta 31-dic-2024 y LTSS hasta 31-dic-2027; SP6 hasta 31-dic-2025 y LTSS hasta 31-dic-2028; SP7 hasta 31-jul-2031 y LTSS hasta 31-jul-2034. Nota nueva: para servidores nuevos usar SLES 15 SP7. No se confirmó que SUSE haya dejado de vender suscripciones de SP5/SP6.
- **2026-10-23 (v2.2):** Revisada contra la Platform Support Matrix HANA v1.42 (2026-08-28). HANA: WS 2012 R2 "solo actualización" repuesto en FP 2102–2305 (nota al pie 17); avisos nuevos de EDS/ETS — WS 2016 falla al instalar si el certificado SSL usa AES256-SHA256 (SAP Note 3644378) y EDS requiere SLES 15 SP6 o superior (SAP Note 3743696; ETS tampoco soporta SP5); aviso informativo de fin de soporte de Windows 10 y Office 2016/2019 (14-oct-2025). FP 2608 pasa de "Roadmap" a "Lanzado" (existe su nota resumen 3712143). Pendiente: las filas HANA de FP 2605/2608 (WS 2019+, solo Win 11, solo Office 2021) no están respaldadas por la matriz v1.42.
- **2026-10-23:** Corregidas 5 categorías de errores en las matrices de compatibilidad (`SW_SQL` / `SW_HANA`) contra SAP Platform Support Matrix v1.38 (SQL) y v1.41 (HANA), ambas 2026-06-16: rango de SQL Server 2022, rango de Office 2021, rango de Windows 11 x64 cliente, WS 2012 R2 "upgrade only" repuesto en FP 2302/2305, y rangos de SUSE SLES corregidos en FP 2105–2608 (incluyendo SP7 que faltaba). Sin tocar fórmulas de cálculo.
- **2026-10-23:** FP 2605 autorizado por el cliente — pasa a ser el Feature Package por defecto y se re-etiqueta "Recomendado" (antes "Roadmap"); FP 2602 baja a "Estable" (antes "Recomendado").
- **2026-10-23:** Agregado selector de % de Buffer Pool para SQL Server en actualización (25% Mínimo / 40% Recomendado / 60% Alto rendimiento), reemplazando el 40% fijo que tenía la fórmula. Agregado ícono ⓘ con tooltip explicando qué es el Buffer Pool.
- **2026-10-23:** Corregido el tooltip cortado por overflow del panel lateral (ver aprendizaje general arriba). Versión de la calculadora actualizada a "v2.0 · oct 2026".

## Espejo

Este repo espeja el proyecto guardado en Google Drive (carpeta "Memoria Claude" → "08 - Proyectos y desarrollo de aplicaciones" → "SAP B1 - Calculadora de Requisitos").
