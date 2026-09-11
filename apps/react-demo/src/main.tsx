
import '../../../packages/tokens/src/pulse-light.css';
import '../../../packages/tokens/src/mappings/pulse-m3-mapping.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
