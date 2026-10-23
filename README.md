# SAP B1 - Calculadora de Requisitos

Calculadora HTML de una sola página (sin dependencias de servidor) para dimensionar hardware de SAP Business One 10 — App Server, DB Server (SQL Server o HANA) y PC de usuario — según Feature Package, tipo de despliegue, usuarios, add-ons y arquitectura de conexión cliente.

Archivo vivo: [`index.html`](./index.html). En línea, en vivo: **https://contactosheinsohn2023-svg.github.io/sap-b1-calculadora-requisitos/**

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

- **2026-10-23:** Corregidas 5 categorías de errores en las matrices de compatibilidad (`SW_SQL` / `SW_HANA`) contra SAP Platform Support Matrix v1.38 (SQL) y v1.41 (HANA), ambas 2026-06-16: rango de SQL Server 2022, rango de Office 2021, rango de Windows 11 x64 cliente, WS 2012 R2 "upgrade only" repuesto en FP 2302/2305, y rangos de SUSE SLES corregidos en FP 2105–2608 (incluyendo SP7 que faltaba). Sin tocar fórmulas de cálculo.
- **2026-10-23:** FP 2605 autorizado por el cliente — pasa a ser el Feature Package por defecto y se re-etiqueta "Recomendado" (antes "Roadmap"); FP 2602 baja a "Estable" (antes "Recomendado").
- **2026-10-23:** Agregado selector de % de Buffer Pool para SQL Server en actualización (25% Mínimo / 40% Recomendado / 60% Alto rendimiento), reemplazando el 40% fijo que tenía la fórmula. Agregado ícono ⓘ con tooltip explicando qué es el Buffer Pool.
- **2026-10-23:** Corregido el tooltip cortado por overflow del panel lateral (ver aprendizaje general arriba). Versión de la calculadora actualizada a "v2.0 · oct 2026".

## Espejo

Este repo espeja el proyecto guardado en Google Drive (carpeta "Memoria Claude" → "08 - Proyectos y desarrollo de aplicaciones" → "SAP B1 - Calculadora de Requisitos").
