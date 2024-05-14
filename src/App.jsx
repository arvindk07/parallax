import "./app.scss";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="Home">
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>Services</section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio 1</section>
      <section>Portfolio 2</section>
      <section>Portfolio 3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
