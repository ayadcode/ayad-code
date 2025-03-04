import Head from "next/head";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaCalendarDays, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import { LuMedal } from "react-icons/lu";
import { PiGraduationCap } from "react-icons/pi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { SiAngular } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

export default function Home() {
  // acitve service background color
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  const handleMouseOut = () => {
    setActiveIndex(0); // set the first item as active when mouse leaves
  };

  // services data
  const services = [
    {
      title: "Web Development 💻",
      description: "Building fast, responsive, and user-friendly websites.",
    },
    {
      title: "UI/UX Design 🎨",
      description:
        "Creating intuitive and visually stunning designs for a better user experience.",
    },
    {
      title: "E-Commerce Solutions 🛍️",
      description: "Developing secure and scalable online stores.",
    },
    {
      title: "Performance Optimization ⚡",
      description: "Enhancing speed, security, and overall website efficiency.",
    },
    {
      title: "Website Maintenance & Support 🔧",
      description: "Ensuring your site stays updated and runs smoothly.",
    },
  ];

  const [loading, setLoading] = useState(true);
  const [alldata, setAlldata] = useState([]);
  const [allwork, setAllwork] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectResponse, blogsResponse] = await Promise.all([
          fetch("/api/projects"),
          fetch("/api/blogs"),
        ]);

        const projectData = await projectResponse.json();
        const blogData = await blogsResponse.json();

        setAlldata(projectData);
        setAllwork(blogData);
      } catch (error) {
        console.log("Error Fetching Data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // filter projects based on selectedCategory
    if (selectedCategory === "All") {
      setFilteredProjects(alldata.filter((pro) => pro.status === "publish"));
    } else {
      setFilteredProjects(
        alldata.filter(
          (pro) =>
            pro.status === "publish" &&
            pro.projectcategory[0] === selectedCategory
        )
      );
    }
  }, [selectedCategory, alldata]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // function to format the date

  const formatDate = (date) => {
    // check if date is valid
    if (!date || isNaN(date)) {
      return "";
    }

    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour12: true,
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <>
      <Head>
        <title>AyadCode</title>
        <meta name="description" content="Mohamed Ayad - Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="../public/favicon.png"
        />
      </Head>

      {/* hero section */}
      <section className="hero">
        <div className="intro_text">
          <svg>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              className="animate-stroke"
            >
              HI
            </text>
          </svg>
        </div>
        <div className="container">
          <div className="flex w-100">
            <div className="heroinfoleft">
              <span className="hero_sb_title" data-aos="fade-right">
                I am Mohamed Ayad
              </span>
              <h1 className="hero_title" data-aos="fade-right">
                Web Developer <br />
              </h1>
              <div
                className="hero_img_box heroimgbox"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img src="/img/me.png" alt="Mohamed ayad" />
              </div>
              <div className="lead" data-aos="fade-up">
                Passionate about building modern, responsive, and user-friendly
                web applications using modern frameworks, Node.js, and
                JavaScript. Constantly learning and improving to craft seamless
                digital experiences. Let's create something amazing!
              </div>
              <div className="hero_btn_box" data-aos="fade-up">
                <Link
                  href="/"
                  download={"/Mohamed-Ayad.pdf"}
                  className="download_cv"
                  target="_blank"
                >
                  Download CV <BiDownload />
                </Link>
                <ul className="hero_social">
                  <li>
                    <a
                      href="https://www.instagram.com/ayadcode/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/ayadcode/"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ayadcode/"
                      target="_blank"
                    >
                      <GrLinkedinOption />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ayadcode" target="_blank">
                      <FaGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* right side image section and you can edit the dark mode on the global style file */}
            <div className="heroimageright">
              <div
                className="hero_img_box"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img src="/img/me.png" alt="Mohamed Ayad" />
              </div>
            </div>
          </div>
          <div className="funfect_area flex flex_">
            <div className="funfect_item" data-aos="flip-right">
              <h3>03+</h3>
              <h4>
                Year of <br /> Experience
              </h4>
            </div>
            <div className="funfect_item" data-aos="flip-right">
              <h3>15+</h3>
              <h4>
                Projects <br /> Complated
              </h4>
            </div>
            <div className="funfect_item" data-aos="flip-left">
              <h3>20+</h3>
              <h4>
                OpenSource <br /> Library
              </h4>
            </div>
            <div className="funfect_item" data-aos="flip-left">
              <h3>20+</h3>
              <h4>
                Happy <br /> Clints
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="container">
          <div className="services_titles">
            <h2>My Quality Services</h2>
            <p>
              I provide high-quality web development services to help businesses
              and individuals build fast, responsive, and user-friendly
              websites. From front-end design to back-end functionality, I
              ensure a seamless digital experience."
            </p>
          </div>
          <div className="services_menu">
            {services.map((service, index) => (
              <div
                key={index}
                className={`services_item ${
                  activeIndex === index ? "sactive" : ""
                }`}
                onMouseOver={() => handleHover(index)}
                onMouseOut={handleMouseOut}
              >
                <div className="left_s_box">
                  <span>0{index + 1}</span>
                  <h3>{service.title}</h3>
                </div>
                <div className="right_s_box">
                  <p>{service.description}</p>
                </div>
                <GoArrowUpRight />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects">
        <div className="container">
          <div className="project_titles">
            <h2>My Recent Work</h2>
            <p>
              Here are some of my latest web development projects, showcasing my
              skills in frontend and backend technologies. Each project is built
              with a focus on performance, responsiveness, and user experience.
            </p>
          </div>
          <div className="project_buttons">
            <button
              className={selectedCategory === "All" ? "active" : ""}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
            <button
              className={selectedCategory === "Web Development" ? "active" : ""}
              onClick={() => setSelectedCategory("Web Development")}
            >
              Web Development 🌐
            </button>
            <button
              className={selectedCategory === "UI-UX Design" ? "active" : ""}
              onClick={() => setSelectedCategory("UI-UX Design")}
            >
              UI/UX Design 🎨
            </button>
            <button
              className={selectedCategory === "Graphic Design" ? "active" : ""}
              onClick={() => setSelectedCategory("Graphic Design")}
            >
              Graphic Design 🖌️
            </button>
          </div>
          <div className="projects_cards">
            {loading ? (
              <div className="flex flex-center wh_50">
                <Spinner />
              </div>
            ) : filteredProjects.length === 0 ? (
              <h1 className="w-100 flex flex-center mt-3">No Projects Found</h1>
            ) : (
              filteredProjects.map((pro) => (
                <Link
                  href={`/projects/${pro.slug}`}
                  key={pro._id}
                  className="procard"
                >
                  <div className="proimgbox">
                    <img src={pro.images[0]} alt={pro.title} />
                  </div>
                  <div className="procontentbox">
                    <h2>{pro.title}</h2>
                    <GoArrowUpRight />
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Experience study */}
      <section className="exstudy">
        <div className="container flex flex-left flex-sb">
          <div className="experience">
            <div className="experience_title flex gap-1">
              <LuMedal />
              <h2>My Experience</h2>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span>2024-Jul / Present</span>
                <h3>Freelancer</h3>
                <p>Full-Stack Developer</p>
              </div>
              <div className="exper_card">
                <span>2024-Jun / 2024-Jul</span>
                <h3>At Pharao101</h3>
                <p>Front-End Developer</p>
              </div>
              <div className="exper_card">
                <span>2023-Sep / 2024-Dec</span>
                <h3>At 19Empire</h3>
                <p>Front-End Developer</p>
              </div>
            </div>
          </div>
          <div className="education">
            <div className="experience_title flex gap-1">
              <PiGraduationCap />
              <h2>My Education</h2>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span>2022 - ♾️</span>
                <h3>Full-Stack Web Development</h3>
                <p>Udemy and other resources</p>
              </div>

              <div className="exper_card">
                <span>2022 - 2023</span>
                <h3>The Open Source Computer Science Degree</h3>
                <p>open-source-cs</p>
              </div>

              <div className="exper_card">
                <span>2021 - 2022</span>
                <h3>UI / UX Design</h3>
                <p>Self-learning</p>
              </div>

              <div className="exper_card">
                <span>2019 - 2023</span>
                <h3>Bachelor's degree in law</h3>
                <p>Alexandria - University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Skills */}
      <section className="myskills">
        <div className="container">
          <div className="myskills_title">
            <h2>My Skills</h2>
            <p>
              A showcase of my expertise in web development, including front-end
              and back-end technologies, UI/UX design, and performance
              optimization.
            </p>
          </div>
          <div className="myskils_cards">
            <div className="mys_card">
              <div className="mys_inner">
                <FaHtml5 size={100} />
                <p className="text-center">HTML</p>
              </div>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <FaCss3Alt size={100} />
                <p className="text-center">CSS</p>
              </div>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <FaJsSquare size={100} />
                <p className="text-center">JavaScript</p>
              </div>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <BiLogoTypescript size={100} />
                <p className="text-center">TypeScript</p>
              </div>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <FaPython size={100} />
                <p className="text-center">Python</p>
              </div>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <RiReactjsFill size={100} />
                <p className="text-center">Reactjs</p>
              </div>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <RiNextjsLine size={100} />
                <p className="text-center">Nextjs</p>
              </div>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <SiAngular size={100} />
                <p className="text-center">Angular</p>
              </div>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <FaSass size={100} />
                <p className="text-center">SASS</p>
              </div>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <FaGit size={100} />
                <p className="text-center">Git</p>
              </div>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <FaFigma size={100} />
                <p className="text-center">Figma</p>
              </div>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <SiAdobephotoshop size={100} />
                <p className="text-center">Adobe photoshop</p>
              </div>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <SiAdobeillustrator size={100} />
                <p className="text-center">Adobe illustrator</p>
              </div>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <RiTailwindCssFill size={100} />
                <p className="text-center">Tailwind Css</p>
              </div>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <FaBootstrap size={100} />
                <p className="text-center">Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blogs */}
      <section className="recentblogs">
        <div className="container">
          <div className="myskills_title">
            <h2>Recent Blogs</h2>
            <p>
              Sharing insights, tips, and experiences on web development,
              technology, and design. Stay updated with my latest articles!
            </p>
          </div>
          <div className="recent_blogs">
            {allwork.slice(0, 3).map((blog) => {
              return (
                <Link
                  href={`/blogs/${blog.slug}`}
                  key={blog._id}
                  className="re_blog"
                >
                  <div className="re_blogimg">
                    <img
                      src={blog.images[0] || "/img/noimage.png"}
                      alt={blog.title}
                    />
                    <span>{blog.blogcategory}</span>
                  </div>
                  <div className="re_bloginfo">
                    <div className="re_topdate flex gap-1">
                      <div className="res_date">
                        <FaCalendarDays />{" "}
                        <span>{formatDate(new Date(blog.createdAt))}</span>
                      </div>
                    </div>
                    <h2>{blog.title}</h2>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
