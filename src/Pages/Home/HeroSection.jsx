import { Link } from "react-scroll";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <p className="section--title">Hey, I'm Ajeet</p>
      <h1 className="hero--section--title">
        <span className="hero--section-title--color">React Native</span> <br />
        Developer
      </h1>
      <p className="hero--section-description">
        Welcome to the digital domain where creativity meets functionality!{" "}
        <br /> I'm <b>Ajeet Singh</b>, a passionate React Native developer, and this is
        where <br /> I sculpt innovative mobile experiences into reality
      </p>
      <Link
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-primary"
      >
        Contact me
      </Link>
    
    </section>
  );
}
