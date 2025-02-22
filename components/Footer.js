import Link from "next/link";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";

export default function Footer() {
  // navlist active
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setClicked(false);
  };

  useEffect(() => {
    // update active link state when the page is reloaded
    setActiveLink(router.pathname);
  }, [router.pathname]);

  // mobile navbar
  const [mobile, setMobile] = useState(false);

  // open
  const handleMobileOpen = () => {
    setMobile(!mobile);
  };

  // close
  const handleMobileClose = () => {
    setMobile(false);
  };
  return (
    <>
      <footer className="footer">
        <div className="footersec flex flex-center flex-col gap-2">
          <div className="logo">
            <img src="/img/logo.png" alt="logo" />
          </div>
          <div className="ul flex gap-2">
            <ul className="flex gap-2">
              <li>
                <Link
                  href="/"
                  onClick={() => handleLinkClick("/")}
                  className={activeLink === "/" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  onClick={() => handleLinkClick("/blogs")}
                  className={activeLink === "/blogs" ? "active" : ""}
                >
                  Blogs
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/gallery"
                  onClick={() => handleLinkClick("/gallery")}
                  className={activeLink === "/gallery" ? "active" : ""}
                >
                  Gallery
                </Link>
              </li> */}
              <li>
                <Link
                  href="/services"
                  onClick={() => handleLinkClick("/services")}
                  className={activeLink === "/services" ? "active" : ""}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  onClick={() => handleLinkClick("/projects")}
                  className={activeLink === "/projects" ? "active" : ""}
                >
                  Projects
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/shop"
                  onClick={() => handleLinkClick("/shop")}
                  className={activeLink === "/shop" ? "active" : ""}
                >
                  Shop
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact"
                  onClick={() => handleLinkClick("/contact")}
                  className={activeLink === "/contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ul className="hero_social">
            <li>
              <a href="https://www.instagram.com/memoayad9/" target="_blank">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/mohamed.hussein.ayad.9/"
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mohamed-ayad-b84300268/"
                target="_blank"
              >
                <GrLinkedinOption />
              </a>
            </li>
            <li>
              <a href="https://github.com/mohamed-hussein-ayad" target="_blank">
                <FaGithub />
              </a>
            </li>
          </ul>
          <div className="copyrights">
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved By{" "}
            <span>Mohamed Ayad</span>
          </div>
        </div>
      </footer>
    </>
  );
}
