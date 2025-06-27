import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import StateLogin from './StateLogin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        {/* <Login /> */}
        {/* <StateLogin /> */}
        <Signup />
    </div>
  </StrictMode>,
)
