import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Special from './components/Special.jsx'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/special' element={<Special/>}/>
    </Routes>
    </Router>
 
  </React.StrictMode>,
)
