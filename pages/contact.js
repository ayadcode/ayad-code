import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";
import { MdAttachEmail } from "react-icons/md";

export default function contact() {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [project, setProject] = useState([]);

  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [messageOk, setMessageOk] = useState("");

  async function createProduct(ev) {
    ev.preventDefault();

    setMessageOk("Sending...");

    const data = {
      name,
      lname,
      email,
      company,
      phone,
      country,
      project,
      price,
      description,
    };

    try {
      await axios.post("/api/contacts", data);
      setMessageOk("✅message sent successfully");

      // reset all form fields
      setName("");
      setLname("");
      setEmail("");
      setCompany("");
      setPhone("");
      setCountry("");
      setProject("");
      setPrice("");
      setDescription("");
    } catch (error) {
      if (error.response) {
        console.error("server error", error.response.data);
      } else if (error.request) {
        console.error("network error", error.request);
      } else {
        console.error("error", error.message);
      }
      setMessageOk("❌failed to send message");
    }
  }

  const handleProjectChange = (projectName) => {
    if (project.includes(projectName)) {
      setProject(project.filter((project) => project !== projectName));
    } else {
      setProject([...project, projectName]);
    }
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Contact us</title>
      </Head>

      <div className="contactpage">
        <div className="container">
          <div className="contactformp">
            <div className="leftcontp">
              <h2>Get in touch</h2>
              <h2>Let's talk about your project</h2>
              <p>
                Project Goals & Vision – Share your ideas, objectives, and what
                you want to achieve.
              </p>
              <p>
                Technologies & Design – Discuss the tools, frameworks, and
                design approach that best fit your project.
              </p>
              <p>
                Development & Execution – Plan the timeline, features, and steps
                to bring your vision to life.
              </p>
              <div className="leftsociinfo">
                <ul>
                  <li>
                    <span>
                      <a href="https://wa.me/qr/CHUCW32FNH2HI1" target="_blank">
                        <IoLogoWhatsapp />
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="email: mo.ayad.9@outlook.com" target="_blank">
                        <MdAttachEmail />
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a
                        href="https://www.linkedin.com/in/mohamed-ayad-b84300268/"
                        target="_blank"
                      ></a>
                      <GrLinkedin />
                    </span>
                  </li>
                  <li>
                    <span>
                      <a
                        href="https://github.com/mohamed-ayad-0"
                        target="_blank"
                      >
                        <FaGithub />
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightcontp">
              <form onSubmit={createProduct}>
                <div className="rightconttitle">
                  <h2>📩 Your Contact Information</h2>
                </div>
                <div className="rightcontinputs">
                  <input
                    type="text"
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    value={lname}
                    onChange={(ev) => setLname(ev.target.value)}
                    placeholder="Last Name"
                  />
                  <input
                    type="text"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    placeholder="Email"
                    required
                  />
                  <input
                    type="text"
                    value={company}
                    onChange={(ev) => setCompany(ev.target.value)}
                    placeholder="Company Name"
                    required
                  />
                  <input
                    type="text"
                    value={phone}
                    onChange={(ev) => setPhone(ev.target.value)}
                    placeholder="Phone Number"
                    required
                  />
                  <select
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    id="country"
                  >
                    <option value="" disabled>
                      Select Country
                    </option>
                    <option value="DZ">Algeria</option>
                    <option value="BH">Bahrain</option>
                    <option value="BR">Brazil</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CN">China</option>
                    <option value="KM">Comoros</option>
                    <option value="DJ">Djibouti</option>
                    <option value="EG">Egypt</option>
                    <option value="GH">Ghana</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IQ">Iraq</option>
                    <option value="JP">Japan</option>
                    <option value="JO">Jordan</option>
                    <option value="KE">Kenya</option>
                    <option value="KW">Kuwait</option>
                    <option value="LB">Lebanon</option>
                    <option value="LY">Libya</option>
                    <option value="MY">Malaysia</option>
                    <option value="MX">Mexico</option>
                    <option value="MA">Morocco</option>
                    <option value="MR">Mauritania</option>
                    <option value="NG">Nigeria</option>
                    <option value="OM">Oman</option>
                    <option value="PS">Palestine</option>
                    <option value="PH">Philippines</option>
                    <option value="QA">Qatar</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="ZA">South Africa</option>
                    <option value="KR">South Korea</option>
                    <option value="SO">Somalia</option>
                    <option value="SD">Sudan</option>
                    <option value="SY">Syria</option>
                    <option value="TH">Thailand</option>
                    <option value="TN">Tunisia</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="US">United States</option>
                    <option value="YE">Yemen</option>
                  </select>
                </div>
                <div className="rightconttitle">
                  <h2>🔧 Project Services Selection</h2>
                </div>
                <div className="rightcontcheckbox">
                  {[
                    "Web Development ",
                    "UI/UX Design",
                    "E-Commerce Solutions",
                    "SEO Optimization",
                    "Performance Optimization ",
                    "Website Maintenance & Support",
                  ].map((projectOption) => (
                    <label
                      key={projectOption}
                      className="cyberpunk-checkbox-label"
                    >
                      <input
                        type="checkbox"
                        className="cyberpunk-checkbox"
                        value={projectOption}
                        checked={project.includes(projectOption)}
                        onChange={() => handleProjectChange(projectOption)}
                      />
                      {projectOption}
                    </label>
                  ))}
                </div>
                <div className="rightconttitle">
                  <h2>
                    💰 What’s Your Estimated Budget for Your Next Project?
                  </h2>
                </div>
                <div className="rightcontredio">
                  {[
                    "$100 - $500",
                    "$500 - $1,000",
                    "$1,000 - $2,500",
                    "$2,500 - $5,000",
                    "More than $5,000",
                  ].map((priceRange) => (
                    <div key={priceRange} className="radio-button">
                      <input
                        type="radio"
                        id={priceRange}
                        name="example-radio"
                        value={priceRange}
                        checked={price === priceRange}
                        onChange={handlePriceChange}
                      />
                      <span className="radio"></span>
                      <label htmlFor={priceRange}>{priceRange}</label>
                    </div>
                  ))}
                </div>
                <div className="rightconttitle">
                  <h2>📝 Tell Us About Your Project</h2>
                </div>
                <div className="rightcontpera">
                  <textarea
                    value={description}
                    name="description"
                    onChange={(ev) => setDescription(ev.target.value)}
                    rows={4}
                    id="description"
                    placeholder="Project Description"
                  ></textarea>
                </div>
                <hr />
                <div className="righhcontsbtn flex gap-3">
                  <button type="submit">Submit</button>
                  <p>{messageOk}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
