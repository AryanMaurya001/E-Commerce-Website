import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-links">
        <a
          href="https://github.com/AryanMaurya001/E-Shopping-Website-Mainhttps---github.com-AryanMaurya001-E-Shopping-Website-blob-Main-README.md"
          target="_blank"
        >
          View Source on Github
        </a>
        <span> / </span>
        <a href="mauryaaryan2710@gmail.com" target="_blank">
          Need any help?
        </a>
        <span> / </span>
        <a href="" target="_blank">
          Say Hi on Twitter
        </a>
        <span> / </span>
        <a href="" target="_blank">
          Read My Blog
        </a>
      </p>
      <p>
        &copy; {currentYear} <strong>Veggy</strong> - Organic Green Store
      </p>
    </footer>
  );
};

export default Footer;
