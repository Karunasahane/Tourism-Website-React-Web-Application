import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
    <Navbar/>
      <Hero
        cname="hero-mid"
        heroimg="2.jpg"
        title="About"
        url="/"
      />
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default About;
