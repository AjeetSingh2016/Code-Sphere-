import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";
import Journey from "../Journey";
import SkillSet from "../../SkillSet";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <SkillSet />
      {/* <Journey /> */}
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <Footer />
     
    </>
  );
}
