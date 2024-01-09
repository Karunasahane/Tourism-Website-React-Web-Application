import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar/>
      <Hero
        cname="hero-mid"
        heroimg="1.jpg"
        title="Services"
        url="/"
      />
      <Trip/>
     <Footer/>
    </>
  );
}

export default Service;
