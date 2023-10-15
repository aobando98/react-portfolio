import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"
import Projects from "./Projects"
import Work from "./Work"
import Contact from "./Contact"
import Education from "./Education"
import Navbar from "./Navbar"

function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <MainContent />
            <Work />
            <Education />
            <Contact />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))