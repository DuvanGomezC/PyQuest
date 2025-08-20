# 🐍 PyQuest: Plataforma Gamificada para Aprender Python en 30 Días 🚀

<div align="center">
  
![Python Logo](https://img.shields.io/badge/Python-3.x-blue?style=for-the-badge&logo=python)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
[![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://dashboard.render.com/)

**PyQuest es una plataforma web interactiva y gamificada que te guía paso a paso para dominar Python desde cero, combinando teoría, práctica y motivación a través de logros y retos diarios.**

[Demo en Vivo](https://pyquest-mai4.onrender.com/index.html) • [Reportar Bug](https://github.com/tu-usuario/PyQuest/issues) • [Solicitar Feature](https://github.com/tu-usuario/PyQuest/issues)

</div>

---

## 📚 Descripción General

PyQuest es un entorno educativo integral para aprender Python en 30 días, pensado tanto para autodidactas como para instituciones educativas. El sistema combina:
- **Lecciones diarias** con teoría y ejemplos claros.
- **Editor de código en el navegador** con ejecución real de Python (Pyodide).
- **Verificación automática** de ejercicios y feedback inmediato.
- **Sistema de logros y gamificación** para mantener la motivación.
- **Panel de administración** para docentes y seguimiento de estudiantes.

La plataforma es 100% web, no requiere instalación y puede desplegarse fácilmente en Render u otros servicios estáticos.

---

## 🧩 Características Destacadas

### Para Estudiantes
- **Ruta de 30 días**: Progresión estructurada desde lo más básico hasta conceptos intermedios.
- **Editor de código interactivo**: Escribe y ejecuta Python directamente en el navegador.
- **Feedback instantáneo**: Verifica tus soluciones y recibe ayuda en tiempo real.
- **Teoría y ejemplos**: Cada ejercicio incluye explicación y casos prácticos.
- **Sistema de logros**: Desbloquea badges y celebra tus avances.
- **Responsive**: Accesible desde cualquier dispositivo.

### Para Educadores
- **Gestión de usuarios**: Visualiza el progreso de cada estudiante.
- **Panel de administración**: Crea, edita y elimina ejercicios.
- **Estadísticas y analytics**: Monitorea el avance y la participación.
- **Seguridad**: Autenticación y control de sesiones con Supabase.

---

## 🏗️ Arquitectura y Tecnologías

- **Frontend**: HTML5, CSS3 (tema neon), JavaScript puro, CodeMirror (editor de código)
- **Backend/BaaS**: Supabase (autenticación, base de datos PostgreSQL, funciones serverless)
- **Ejecución de Python**: Pyodide (corre Python real en el navegador)
- **Despliegue**: Render 
- **Control de versiones**: Git

---

## 🚀 Instalación y Despliegue

### Requisitos Previos
- Navegador web moderno
- Cuenta en [Supabase](https://supabase.com)
- Cuenta en [Render](https://dashboard.render.com/) (opcional para despliegue)
- Git instalado

### 1. Clona el repositorio
```bash
git clone https://github.com/tu-usuario/PyQuest.git
cd PyQuest
```

### 2. Configura Supabase
- Crea un proyecto en Supabase.
- Ejecuta el SQL de ejemplo para crear las tablas `users`, `exercises` y `user_progress`.
- Activa Row Level Security (RLS) y define las políticas recomendadas.

### 3. Configura las claves de Supabase
- **Método recomendado (producción):**
  - Usa variables de entorno y el script `generate-config.js` para crear `config.js` en cada build (ver sección avanzada abajo).
- **Método simple (local):**
  - Crea un archivo `config.js` con tus claves:
    ```javascript
    window.SUPABASE_CONFIG = {
      url: 'TU_SUPABASE_URL',
      anonKey: 'TU_SUPABASE_ANON_KEY',
      functionsBase: 'TU_SUPABASE_FUNCTIONS_BASE'
    };
    ```
  - **No subas este archivo a Git.**

### 4. Ejecuta localmente
```bash
# Opción 1: Abrir index.html directamente
# Opción 2: Servidor local
python -m http.server 8000
# Visita http://localhost:8000
```

### 5. Despliegue en Render
- Conecta tu repositorio a Render. Render se integra directamente con GitHub, GitLab y Bitbucket, o puedes crear un sitio estático arrastrando y soltando tu carpeta de build.

- Configura las variables de entorno. En el panel de Render, añade tus variables de entorno. Render las inyecta automáticamente durante el proceso de despliegue. No es necesario ejecutar un script adicional.

- Verifica la configuración del build. Render detecta automáticamente el entorno de tu proyecto. Asegúrate de que el comando de build apunte a la carpeta correcta de tu aplicación. Render no requiere un archivo config.js en tu carpeta final, ya que gestiona las variables por sí solo.

---

## 📁 Estructura del Proyecto

```
PyQuest/
├── index.html           # Página principal
├── admin.html           # Panel de administración
├── style.css            # Estilos globales
├── script.js            # Lógica principal del juego
├── admin.js             # Lógica del panel admin
├── config.js            # Configuración (NO subir a Git)
├── generate-config.js   # Script para generar config.js desde variables de entorno
├── README.md            # Documentación
├── .gitignore           # Archivos ignorados
└── ...
```

---

## 🛡️ Seguridad y Buenas Prácticas

- **Claves Supabase**: La clave `anon` debe tener permisos mínimos y RLS activado. Nunca expongas claves de servicio.
- **config.js**: No subas este archivo a tu repositorio. Usa `.gitignore`.
- **Variables de entorno**: Para producción, usa variables de entorno y genera `config.js` en el build.
- **Autenticación**: El sistema usa Supabase Auth y controla sesiones activas.
- **Protección de datos**: Todas las operaciones sensibles deben pasar por políticas de seguridad en Supabase.

---

## 🧑‍💻 Uso de la Plataforma

### Para Estudiantes
1. **Registro/Login**: Crea tu cuenta o inicia sesión.
2. **Selecciona el día**: Comienza desde el día 1 o continúa donde lo dejaste.
3. **Lee la teoría**: Cada ejercicio incluye explicación detallada.
4. **Practica**: Usa el editor integrado para escribir y ejecutar código Python.
5. **Verifica**: Ejecuta tu código y recibe feedback instantáneo.
6. **Progresa**: Avanza al siguiente ejercicio y desbloquea logros.

### Para Administradores
1. **Accede al panel**: Ve a `/admin.html` con credenciales de admin.
2. **Gestiona usuarios**: Visualiza y administra el progreso de los estudiantes.
3. **Crea ejercicios**: Añade nuevos desafíos y teoría.
4. **Monitorea**: Analiza estadísticas de uso y progreso.

---

## 🛠️ Personalización y Extensión

- **Agregar ejercicios**: Edita la base de datos en Supabase o usa el panel admin.
- **Cambiar estilos**: Modifica `style.css` para personalizar el tema.
- **Internacionalización**: El sistema puede adaptarse fácilmente a otros idiomas.
- **Integración con otros servicios**: Puedes extender la plataforma usando funciones serverless de Supabase.

---

## 📝 Contribución

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:
1. Haz un fork del proyecto.
2. Crea una rama para tu feature o fix.
3. Haz tus cambios y añade comentarios claros.
4. Abre un Pull Request con una descripción detallada.
5. Usa issues para reportar bugs o sugerir mejoras.

---

## 🗺️ Roadmap

- [x] Editor de código integrado y ejecución de Python
- [x] Sistema de autenticación y control de sesiones
- [x] Ejercicios progresivos y teoría diaria
- [x] Panel de administración para docentes
- [ ] Sistema de logros y badges
- [ ] Modo oscuro/claro
- [ ] Exportar progreso a PDF
- [ ] Integración con GitHub
- [ ] Modo multijugador y retos en tiempo real

---

## 📜 Licencia

Distribuido bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## 📞 Contacto y Soporte

**Engel** - Desarrollador Principal

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DuvanGomezC)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/duvan-arcesio-gomez-cortes/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:live.pyquest@gmail.com)

**Repositorio:** [https://github.com/DuvanGomezC/PyQuest](https://github.com/DuvanGomezC/PyQuest)

<div align="center">

**⭐ Si te gusta PyQuest, ¡no olvides darle una estrella! ⭐**

*Hecho con ❤️ por [Engel](https://github.com/DuvanGomezC)*

</div>