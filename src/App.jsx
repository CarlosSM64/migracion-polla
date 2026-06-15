import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import ProtectedRoute from './components/ProtectedRoute'
import Polla from './pages/polla'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/polla"
            element={
              <ProtectedRoute>
                <Polla />
              </ProtectedRoute>
            }
          />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
