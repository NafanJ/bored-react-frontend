import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BoredHeader from './Header.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BoredHeader />
    <App />
  </React.StrictMode>,
)
