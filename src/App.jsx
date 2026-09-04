import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TrustedBy from "./components/TrustedBy"
import Services from "./components/Services"
import OurWork from "./components/OurWork"
import Teams from "./components/Teams"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <Contact />
      <Footer theme={theme}/>
    </div>
  )
}

export default App
