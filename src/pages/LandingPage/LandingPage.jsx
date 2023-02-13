import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-body">
      <nav className="landing-nav">
        <span className="landing-logo">Graphite</span>
        <span
          className="nav-login-signup-btn"
          onClick={() => navigate("/verification")}
        >
          Log in / Sign up
        </span>
      </nav>
      <div className="project-desc">
        <h1>
          CSS Background <br />
          Generator
        </h1>
        <h3>Welcome to Graphite</h3>
        <p>
          Are you tired of using the same old solid color backgrounds for your
          website or design projects? Want to add a touch of creativity and visual
          interest to your work? Our gradient background generator is here to help.
        </p>
        <p>
          With our tool, you can easily create stunning gradient backgrounds in just
          a few clicks. Simply choose your starting and ending colors, adjust the
          direction and intensity of the gradient, and voila! You'll have a
          beautiful, custom gradient background ready to use.
        </p>
        <p>
          Whether you're a designer looking to add some flair to your projects, or a
          website owner looking to give your site a fresh, modern look, our gradient
          background generator has you covered. Give it a try and see the difference
          it can make for your work.
        </p>
      </div>
    </div>
  );
}
