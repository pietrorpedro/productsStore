import Home from './Pages/Home'
import './index.css'

import { BrowserRouter, Routes, Route, } from "react-router-dom"
import HeaderLayout from './layouts/headerLayout'
import Products from './Pages/Products'
import About from './Pages/About'

function App() {


  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HeaderLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='about' element={<About/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
