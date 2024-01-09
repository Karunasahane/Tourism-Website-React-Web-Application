import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
    <Navbar/>
      <Hero
        cname="hero"
        heroimg="night.jpg"
        title="Your Journey your story"
        text="Choose your favourite destination"
        btnclass="show"
        url="/"
        buttontext="Travel Plan"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}

export default Home;
