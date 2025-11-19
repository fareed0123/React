import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element = {<Home />}> </Route>
        <Route path="/home" element = {<Home />}> </Route>
        <Route path="/contact" element = {<Contact />}> </Route>
        <Route path="/about" element = {<About />}> </Route>
      </Routes>
    </>
  )
}
