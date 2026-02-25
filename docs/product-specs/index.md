# Dation Campus — Especificaciones del Producto

## Resumen
Sitio web estático para la venta de cursos de IA orientados a estudiantes de bachillerato que se preparan para la universidad.

## Stack Tecnológico
- Vite (bundler / dev server)
- HTML + CSS + JavaScript vanilla
- Sin backend, sin base de datos
- Hosting: estático (a definir)

## Páginas
| Página          | Archivo          | Descripción                                          |
|-----------------|------------------|------------------------------------------------------|
| Inicio          | `index.html`     | Hero, propuesta de valor, resumen de cursos, CTA     |
| Equipo          | `team.html`      | Miembros del equipo con filtro y modal               |
| Cursos          | `cursos.html`    | Listado de cursos con detalles placeholder           |
| Contacto        | `contact.html`   | Info de contacto + formulario de captura de datos    |

## Idioma
- Español (Latinoamérica)
- Toda la interfaz y contenido en español LATAM

## Formulario de Contacto (en página de Contacto)
Campos:
- Nombre completo
- Correo electrónico
- Teléfono celular
- Mensaje (opcional)
- Botón: "Solicitar Información"

> Nota: El formulario es solo UI (sin backend). Se puede integrar con un servicio externo en el futuro.

## Detalles de Cursos (placeholder — se insertarán después)
Cada curso mostrará:
- Nombre del curso
- Duración
- Metodología
- Precio
- Fecha de inicio
- Herramientas de IA que se enseñan
