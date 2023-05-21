// import react from "react";
import vg from "../assets/2.webp";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>
            Solution to all your coding &
            <br />
            web development related problems.
          </p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday. We are a leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h2>Who we are?</h2>
          <p>
            We are the best edtech company out there which help the kids &
            learners in learning coding & web development.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h2>Brands</h2>

          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <a
                href="https://github.com/chandrabhan-singh-1"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <AiFillGithub />
                <p>GitHub</p>
              </a>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <a
                href="https://www.linkedin.com/in/chandrabhan-singh-rathore-868951231"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
                <p>LinkedIn</p>
              </a>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <a
                href="https://www.instagram.com/chandrabhan18_singh"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
                <p>Instagram</p>
              </a>
            </div>

            <div style={{ animationDelay: "0.9s" }}>
              <a
                href="https://www.youtube.com"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <AiFillYoutube />
                <p>YouTube</p>
              </a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
