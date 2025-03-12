# Next.js + Prisma CRUD App

Este es un proyecto de **práctica** para explorar y probar el framework **Next.js** junto con **Prisma** como ORM para la base de datos. Se ha desarrollado un **CRUD** básico para gestionar tareas, con la posibilidad de expandirlo en el futuro para mejorar la organización personal.

## 🚀 Tecnologías utilizadas

- **Next.js** (App Router)
- **Prisma** (ORM para la base de datos)
- **MySQL** (Base de datos, pero puedes cambiarla según sea necesario)
- **TailwindCSS** (Estilos)
- **Vercel** (Despliegue de la aplicación)

## 📌 Características

✅ Crear, leer, actualizar y eliminar tareas.
✅ Uso de **Prisma Client** para manejar la base de datos.
✅ Despliegue en **Vercel**.
✅ Arquitectura modular con componentes reutilizables.
✅ Posibilidad de escalar la aplicación en el futuro.

## 📂 Estructura del Proyecto

```
/project-root
├── prisma/               # Esquema de la base de datos Prisma
│   ├── schema.prisma     # Definición del modelo de datos
├── src/
│   ├── app/
│   │   ├── page.js       # Home (Listado de tareas)
│   │   ├── [id]/page.js  # Edición de tareas
│   ├── components/
│   │   ├── TaskCard.js   # Componente de tarea
│   ├── libs/
│   │   ├── prisma.js     # Configuración de Prisma
│   ├── styles/
│   │   ├── globals.css   # Estilos globales con Tailwind
│   ├── pages/api/task/   # API Routes para CRUD de tareas
├── .env                  # Variables de entorno
├── package.json          # Dependencias del proyecto
├── README.md             # Documentación
```

## ⚙️ Instalación y Configuración

1. **Clonar el repositorio:**
   ```sh
   git clone https://github.com/tu-usuario/Next-Crud.git
   cd Next-Crud
   ```

2. **Instalar dependencias:**
   ```sh
   npm install
   ```

3. **Configurar la base de datos:**
   - Crea un archivo **.env** en la raíz con tu conexión a la base de datos:
     ```
     DATABASE_URL="mysql://usuario:password@localhost:3306/nombre_db"
     ```
   - Ejecutar migraciones:
     ```sh
     npx prisma migrate dev --name init
     ```

4. **Ejecutar el servidor en desarrollo:**
   ```sh
   npm run dev
   ```

5. **Desplegar en Vercel:**
   ```sh
   vercel
   ```

## 📌 API Endpoints

- **GET /api/task** → Obtener todas las tareas
- **GET /api/task/:id** → Obtener una tarea por ID
- **POST /api/task** → Crear una nueva tarea
- **PUT /api/task/:id** → Actualizar una tarea
- **DELETE /api/task/:id** → Eliminar una tarea

## 📢 Futuras Mejoras

🔹 Autenticación y autorización con JWT o NextAuth.  
🔹 Integración con una base de datos en la nube como PlanetScale o Supabase.  
🔹 Notificaciones o recordatorios para tareas.  
🔹 UI mejorada con animaciones y mejor experiencia de usuario.

## 📜 Licencia

Este proyecto es de **código abierto** y está disponible bajo la licencia **MIT**.

---

✉️ **Contacto**: Si tienes preguntas o sugerencias, no dudes en abrir un issue o contactarme. 🚀

