# NexCodev - Página Web Profesional

## 📋 Descripción
Sitio web profesional y moderno para NexCodev, un emprendimiento de soluciones digitales. Desarrollado con HTML5, CSS3, JavaScript y Bootstrap 5.

## 🎯 Características

### Secciones Incluidas
- ✅ **Navbar Responsivo** - Navegación sticky con animaciones
- ✅ **Hero Section** - Sección de inicio con animaciones y CTAs
- ✅ **Sobre Nosotros** - Información de la empresa con tarjetas de valores
- ✅ **Servicios** - 6 servicios con iconos y hover effects
- ✅ **Portfolio** - Carrusel profesional de proyectos con slider interactivo
- ✅ **Equipo** - Tarjetas de miembros del equipo con redes sociales
- ✅ **Testimonios** - Reseñas de clientes con valoraciones
- ✅ **Contacto** - Formulario de contacto con validación
- ✅ **Footer** - Pie de página con links y redes sociales

### Diseño
- 🎨 **Moderno y Profesional** - Colores gradientes y tipografía moderna
- 📱 **100% Responsivo** - Optimizado para móvil, tablet y desktop
- ⚡ **Performance** - Optimizado para velocidad y SEO
- ♿ **Accesible** - Cumple con estándares WCAG
- 🌙 **Dark Mode Ready** - Preparado para modo oscuro

## 📁 Estructura de Archivos

```
WEB-V2-NEXCODEV/
├── index.html              # Archivo principal HTML
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos personalizados
│   ├── js/
│   │   └── script.js       # JavaScript personalizado
│   └── images/             # Carpeta para imágenes
│       ├── logo.png
│       ├── hero-image.png
│       ├── about-image.png
│       ├── project-1.png
│       ├── project-2.png
│       ├── project-3.png
│       ├── project-4.png
│       ├── team-member-1.png
│       ├── team-member-2.png
│       ├── team-member-3.png
│       ├── client-1.png
│       ├── client-2.png
│       └── client-3.png
└── README.md               # Este archivo
```

## 🚀 Cómo Usar

### 1. Preparar Imágenes
Coloca tus imágenes en la carpeta `assets/images/` con los siguientes nombres:
- `logo.png` - Logo de la empresa (50x50px mínimo)
- `hero-image.png` - Imagen principal de la sección hero
- `about-image.png` - Imagen para la sección "Sobre Nosotros"
- `project-1.png`, `project-2.png`, `project-3.png`, `project-4.png` - Imágenes de proyectos
- `team-member-1.png`, `team-member-2.png`, `team-member-3.png` - Fotos del equipo
- `client-1.png`, `client-2.png`, `client-3.png` - Fotos de clientes

### 2. Personalizar Contenido
Edita el archivo `index.html` y reemplaza:
- Nombres del equipo y descripciones
- Información de contacto (teléfono, email, dirección)
- Nombres y descripciones de servicios
- Información de proyectos
- Testimonios de clientes

### 3. Configurar Formulario de Contacto
En `assets/js/script.js`, busca la sección "VALIDACIÓN Y ENVÍO DE FORMULARIO" y descomentar el código para:
- Conectar con tu servidor backend
- Integrar con servicio de emails (Mailgun, SendGrid, etc.)
- Guardar mensajes en base de datos

### 4. Servir la Página
Opción 1 - Con Python 3:
```bash
python -m http.server 8000
```

Opción 2 - Con Node.js:
```bash
npm install -g http-server
http-server
```

Opción 3 - Con VS Code Live Server:
- Instala la extensión "Live Server"
- Click derecho en index.html → "Open with Live Server"

## 🎨 Personalización

### Colores
Los colores están definidos en `assets/css/styles.css` en las variables CSS:
```css
:root {
    --primary: #0066ff;           /* Color principal */
    --primary-dark: #0052cc;      /* Color principal oscuro */
    --secondary: #6f42c1;         /* Color secundario */
    --light: #f8f9ff;             /* Color claro */
    --dark: #1a1a2e;              /* Color oscuro */
    --gray: #6c757d;              /* Color gris */
}
```

### Tipografía
La fuente utilizada es "Poppins" de Google Fonts. Para cambiarla, edita:
```html
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
```

### Espaciado y Radio de Bordes
```css
--border-radius: 12px;            /* Borde redondeado */
--shadow: 0 10px 30px ...;        /* Sombra estándar */
--shadow-lg: 0 20px 50px ...;     /* Sombra grande */
```

## 📱 Responsividad

La página está optimizada para:
- 📱 **Móviles** (< 576px)
- 📱 **Tablets** (576px - 768px)
- 🖥️ **Desktop** (> 768px)

Los breakpoints de Bootstrap 5 se utilizan en toda la página.

## 🔧 Funcionalidades JavaScript

1. **Navbar Dinámico** - Se adapta al scroll y anima los links
2. **Validación de Formulario** - Valida email y campos obligatorios
3. **Animaciones al Scroll** - Elementos se animan cuando aparecen
4. **Carrusel de Portafolio** - Slider interactivo de proyectos
5. **Notificaciones** - Mensajes de éxito/error personalizados
6. **Parallax** - Efecto de movimiento en imágenes
7. **Smooth Scroll** - Desplazamiento suave entre secciones

## 🔐 Seguridad

Recomendaciones:
- Sanitizar datos del formulario en el backend
- Usar HTTPS en producción
- Validar entrada en servidor (no solo cliente)
- Proteger contra CSRF y XSS

## 🚀 SEO

Elementos SEO incluidos:
- Meta tags descriptivos
- Estructura semántica HTML5
- URLs amigables (#home, #about, etc.)
- Atributos alt en imágenes
- Schema.org (listo para agregar)

## 📊 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Navegadores móviles modernos

## 📞 Soporte

Para contactar con el equipo de NexCodev o reportar problemas, completa el formulario en la sección de contacto o envía un email a `info@nexcodev.com`.

## 📄 Licencia

Este sitio web es propiedad de NexCodev. Todos los derechos reservados.

---

**Última actualización:** 26 de Noviembre de 2025
**Versión:** 1.0
