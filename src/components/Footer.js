import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div className="text">
                <h1>Trippy</h1>
                <p>Choose your favorite destinaton</p>
            </div>
            <div>
              <a href="/"> <i className="fa-brands fa-facebook-square"></i></a>
              <a href="/"> <i className="fa-brands fa-instagram-square"></i></a>
              <a href="/"> <i className="fa-brands fa-twitter-square"></i></a>
              <a href="/"> <i className="fa-brands fa-github-square"></i></a>
            </div>
        </div>

        <div className="bottom">
            <div>
              <h4>Project</h4>
              <a href="/">Changelog</a>
              <a href="/">Status</a>
              <a href="/">License</a>
              <a href="/">All Versions</a>
            </div>
            <div>
              <h4>Community</h4>
              <a href="/">Github</a>
              <a href="/">Issues</a>
              <a href="/">Twitter</a>
              <a href="/">Project</a>
            </div>
            <div>
              <h4>Help</h4>
              <a href="/">Support</a>
              <a href="/">\Troubleshooting</a>
              <a href="/">Contact us</a>
            </div>
            <div>
              <h4>Others</h4>
              <a href="/">Terms and Conditions</a>
              <a href="/">Privacy policy</a>
              <a href="/">Licences</a>
            </div>
        </div>
    </div>
  );
};

export default Footer;
