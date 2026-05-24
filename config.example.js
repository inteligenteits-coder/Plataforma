// =============================================================
// config.example.js — PLANTILLA DE CONFIGURACIÓN
// =============================================================
// INSTRUCCIONES:
//   1. Copia este archivo y renómbralo a: config.js
//   2. Rellena cada valor con las credenciales de TU proyecto Firebase
//   3. Nunca subas config.js a GitHub (ya está en .gitignore)
// =============================================================

// Claves de Firebase — Obtén estas desde:
// Firebase Console → Tu Proyecto → Configuración → Aplicaciones Web
export const firebaseConfig = {
  apiKey: "REEMPLAZA_CON_TU_API_KEY",
  authDomain: "REEMPLAZA_CON_TU_PROYECTO.firebaseapp.com",
  projectId: "REEMPLAZA_CON_TU_PROYECTO",
  storageBucket: "REEMPLAZA_CON_TU_PROYECTO.firebasestorage.app",
  messagingSenderId: "REEMPLAZA_CON_TU_SENDER_ID",
  appId: "REEMPLAZA_CON_TU_APP_ID",
  measurementId: "REEMPLAZA_CON_TU_MEASUREMENT_ID"
};

// Clave de Gemini AI — Obtén una en: https://aistudio.google.com/app/apikey
export const GEMINI_API_KEY = "REEMPLAZA_CON_TU_CLAVE_GEMINI";

// Correo del administrador principal de la plataforma
export const ADMIN_EMAIL = "correo_admin@tudominio.com";
