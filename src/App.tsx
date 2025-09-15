import {Routes, Route} from "react-router-dom"
import Navbar from './navbar.tsx'
import Home from './Pages/Home.tsx'
import Contact from './Pages/Contact.tsx'


export default function App() {
    return(
        <div>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </main>
        </div>
        
    );
}