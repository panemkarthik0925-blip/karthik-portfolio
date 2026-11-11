
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="logo">
        Karthik<span> Panem</span>
      </a>

      <p>Designed & Built by Karthik</p>

      <p>
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;