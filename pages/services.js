import Head from "next/head";
import Link from "next/link";
import { HiXMark } from "react-icons/hi2";
import { IoMdCheckmark } from "react-icons/io";

export default function services() {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>

      <div className="servicespage">
        <div className="topservices">
          <div className="container">
            <h2>Services</h2>
          </div>
        </div>
        <div className="centerservices">
          <div className="container">
            <div className="cservicesbox">
              <div className="csservice">
                <span>01</span>
                <div>
                  <h2>Web Development</h2>
                  <img src="/img/website_icon.svg" alt="Website" />
                </div>
                <ul>
                  <li>Responsive and mobile-friendly website design</li>
                  <li>Custom solutions tailored to business needs</li>
                  <li>SEO-friendly coding for better search rankings</li>
                  <li>High-performance and fast-loading pages</li>
                  <li>Seamless integration with third-party tools</li>
                </ul>
                <p>
                  Create a modern, fully functional, and fast website tailored
                  to your business needs. we build secure, scalable, and
                  high-performing websites with a focus on user experience,
                  performance and seo.
                </p>
              </div>
              <div className="csservice">
                <span>04</span>
                <div>
                  <h2>UI/UX Design</h2>
                  <img src="/img/website_icon.svg" alt="Website" />
                </div>
                <ul>
                  <li>User-centered, intuitive, and engaging designs</li>
                  <li>Wireframing & prototyping for seamless navigation.</li>
                  <li>Modern aesthetics with a focus on usability.</li>
                  <li>Mobile-friendly, responsive interfaces.</li>
                  <li>A/B testing and continuous improvement.</li>
                </ul>
                <p>
                  Deliver a seamless and engaging experience with intuitive
                  ui/ux design. we focus on aesthetics, usability, and user
                  satisfaction to enhance brand identity and digital
                  interactions.
                </p>
              </div>
              <div className="csservice">
                <span>02</span>
                <div>
                  <h2>E-commerce</h2>
                  <img src="/img/website_icon.svg" alt="Website" />
                </div>
                <ul>
                  <li>Secure and scalable online store development</li>
                  <li>Seamless payment gateway integration</li>
                  <li>Product catalog and inventory management</li>
                  <li>Optimized checkout process for higher conversions</li>
                  <li>User-friendly admin panel for easy management</li>
                </ul>
                <p>
                  Launch a fully functional and secure e-commerce store with
                  custom features. From product listings to payment
                  integrations, we provide complete solutions for a smooth
                  shopping experience.
                </p>
              </div>
              <div className="csservice">
                <span>05</span>
                <div>
                  <h2>SEO Optimization</h2>
                  <img src="/img/website_icon.svg" alt="Website" />
                </div>
                <ul>
                  <li>Keyword research and strategic content planning</li>
                  <li>On-page and technical SEO enhancements</li>
                  <li>Link-building strategies for better rankings</li>
                  <li>Performance analysis and traffic reporting</li>
                  <li>Mobile and speed optimization for SEO success</li>
                </ul>
                <p>
                  Boost your website’s visibility with advanced SEO strategies.
                  We optimize content, structure, and performance to attract
                  organic traffic and improve rankings.
                </p>
              </div>
              <div className="csservice">
                <span>03</span>
                <div>
                  <h2>Performance</h2>
                  <img src="/img/website_icon.svg" alt="Website" />
                </div>
                <ul>
                  <li>Speed and load time enhancements for efficiency</li>
                  <li>Caching strategies for faster page performance</li>
                  <li>Code minification and asset optimization</li>
                  <li>Mobile-first approach for improved responsiveness</li>
                  <li>Server and database performance tuning</li>
                </ul>
                <p>
                  Enhance your website’s speed and performance for a better user
                  experience. We implement optimization techniques to improve
                  load times, responsiveness, and overall efficiency.
                </p>
              </div>
              <div className="csservice">
                <span>06</span>
                <div>
                  <h2>Website Support</h2>
                  <img src="/img/website_icon.svg" alt="Website" />
                </div>
                <ul>
                  <li>Regular security updates and bug fixes</li>
                  <li>Real-time website performance monitoring</li>
                  <li>Content updates and feature enhancements</li>
                  <li>Backup, recovery, and data protection solutions</li>
                  <li>24/7 technical support and troubleshooting</li>
                </ul>
                <p>
                  Keep your website secure, fast, and up-to-date with expert
                  maintenance. We provide regular updates, backups, security
                  fixes, and technical support to ensure smooth operation.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="pricingplansec">
          <div className="container">
            <div className="pricingtitles text-center">
              <h3>
                <img src="/img/chevron_right.png" alt="" />
                PRICING PLAN
              </h3>
            </div>
            <div className="pricingcards">
              <div className="pricingcard">
                <h4>Life plan</h4>
                <p>Perfect choice for individual</p>
                <h2>
                  $29.00 <span>Monthly</span>
                </h2>
                <Link href="/contact">
                  <button>Get Start Now</button>
                </Link>
                <div>
                  <h5>Lite includes:</h5>
                  <ul>
                    <li>
                      <IoMdCheckmark /> Powerful admin panel
                    </li>
                    <li>
                      <IoMdCheckmark /> Powerful admin panel
                    </li>
                    <li>
                      <HiXMark /> Powerful admin panel
                    </li>
                    <li>
                      <HiXMark /> Powerful admin panel
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pricingcard">
                <h4>Life plan</h4>
                <p>Perfect choice for individual</p>
                <h2>
                  $29.00 <span>Monthly</span>
                </h2>
                <Link href="/contact">
                  <button>Get Start Now</button>
                </Link>
                <div>
                  <h5>Lite includes:</h5>
                  <ul>
                    <li>
                      <IoMdCheckmark /> Powerful admin panel
                    </li>
                    <li>
                      <IoMdCheckmark /> Powerful admin panel
                    </li>
                    <li>
                      <HiXMark /> Powerful admin panel
                    </li>
                    <li>
                      <HiXMark /> Powerful admin panel
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pricingcard">
                <h4>Life plan</h4>
                <p>Perfect choice for individual</p>
                <h2>
                  $29.00 <span>Monthly</span>
                </h2>
                <Link href="/contact">
                  <button>Get Start Now</button>
                </Link>
                <div>
                  <h5>Lite includes:</h5>
                  <ul>
                    <li>
                      <IoMdCheckmark /> Powerful admin panel
                    </li>
                    <li>
                      <IoMdCheckmark /> Powerful admin panel
                    </li>
                    <li>
                      <HiXMark /> Powerful admin panel
                    </li>
                    <li>
                      <HiXMark /> Powerful admin panel
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
