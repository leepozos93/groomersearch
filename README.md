🐶 GroomerSearch – Sistema de Agenda para Estética Canina

GroomerSearch es una aplicación web frontend para la gestión de citas de una estética canina, inspirada en sistemas de barberías profesionales.
Permite a clientes agendar citas y al administrador bloquear horarios ocupados, todo sin backend, usando HTML5, CSS3 y JavaScript.

🚀 Funcionalidades
👤 Clientes

Selección de servicio

Selección de groomer

Selección de fecha

Bloqueo automático de horarios ocupados

Confirmación de cita vía WhatsApp

Interfaz responsive (mobile first)

🔐 Administrador

Panel simple para bloquear horarios

Persistencia con localStorage

Visualización de citas bloqueadas

Sin necesidad de servidor

🧱 Tecnologías utilizadas

HTML5

CSS3 (modular)

JavaScript ES Modules

localStorage

WhatsApp API (wa.me)

Font Awesome

Google Fonts (Poppins)

groomersearch/
│
├── index.html              # Página pública (clientes)
├── admin.html              # Panel administrador
├── README.md
│
├── assets/
│   ├── img/
│   │   └── hero.jpg
│   ├── icons/
│   └── fonts/
│
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   └── responsive.css
│
├── js/
│   ├── config.js
│   ├── app.js
│   ├── admin.js
│   │
│   ├── data/
│   │   ├── services.js
│   │   └── groomers.js
│   │
│   ├── storage/
│   │   └── bookings.js
│   │
│   └── ui/
│       ├── steps.js
│       ├── calendar.js
│       └── whatsapp.js


⚙️ Instalación y uso
1️⃣ Clonar o copiar el proyecto
git clone https://github.com/tu-usuario/groomersearch.git