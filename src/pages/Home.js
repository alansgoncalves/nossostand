import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Eventos } from "../components/Eventos";
import { Testimonials } from "../components/testimonials";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "../App.css";
import SlideCompanies from "../components/SlideCompanies";
import { Advantages } from "../components/advantages";
import { StartHere } from "../components/StartHere";
import Contact from "../components/contact";
import { Footer } from "../components/Footer";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <SlideCompanies />
      <Advantages />
      <StartHere />
      <Eventos data={landingPageData.Eventos} />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact />
      <Footer data={landingPageData.Contact} />
    </div>
  );
};

export default App;
