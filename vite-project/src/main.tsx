import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ColorSliderContextProvider from "./Providers/ColorSliderContextProvicer.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorSliderContextProvider>
      <App />
    </ColorSliderContextProvider>
  </React.StrictMode>,
)
