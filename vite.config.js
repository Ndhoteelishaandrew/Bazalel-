// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
})

// ─────────────────────────────────────────────
// src/main.jsx  (create this file in src/)
// ─────────────────────────────────────────────
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import Bezalel from './Bezalel.jsx'
//
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Bezalel />
//   </React.StrictMode>
// )
