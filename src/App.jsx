import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div className="container mt-4">
          <div className="mt-5">
            <h1>Welcome to React 🚀</h1>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </BrowserRouter>



    </>
  )
}

export default App