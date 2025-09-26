import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Impact from "@/components/impact";
import Initiatives from "@/components/initiatives";
import Navbar from "@/components/navbar";


export default function Main() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Impact />
            <Initiatives />
            <Contact />
            <Footer />
        </div>
    )
}
