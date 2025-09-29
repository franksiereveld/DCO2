import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './hero-center-override.css'
import './hero-fix.css'
import './layout-fixes.css'
import './datacenter-fix.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
