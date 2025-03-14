import { Swiper, SwiperSlide } from "swiper/react";
import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";
import Head from "next/head";
import Spinner from "@/components/Spinner";
import Blogsearch from "@/components/Blogsearch";
import { FaLaptopCode } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { FaBrain } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

export default function blogs() {
  // pagination
  const [currentPage, setCurrentPage] = useState(1); // for page 1
  const [perPage] = useState(7);

  const [searchInput, setSearchInput] = useState(false);

  const handleSearchOpen = () => {
    setSearchInput(!searchInput);
  };

  const handleSearchClose = () => {
    setSearchInput(false);
  };

  // search
  const [searchQuery, setSearchQuery] = useState("");

  //fetch blog data
  const { alldata, loading } = useFetchData("/api/blogs");

  //function to handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // total number of blogs
  const allblog = alldata.length;

  // filter all data based on search query
  const filteredBlogs =
    searchQuery.trim() === ""
      ? alldata
      : alldata.filter((blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

  // calculate index of the first blog displayed onthe currend page
  const indexOfFirstBlog = (currentPage - 1) * perPage;
  const indexofLastBlog = currentPage * perPage;

  // get the current page's blogs
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexofLastBlog);
  const publishedData = currentBlogs.filter((ab) => ab.status === "publish");
  const sliderpubdata = alldata.filter((ab) => ab.status === "publish");
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allblog / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className="blogpage">
        <section className="tophero">
          <div className="container">
            <div className="toptitle">
              <div className="toptitlecont flex">
                <h1>
                  Welcome to <span>Our Blogs Page!</span>
                </h1>
                <p>
                  Explore insightful articles on web development, UI/UX design,
                  coding best practices, and the latest AI tech trends. Stay
                  updated and enhance your skills with our expert content!
                </p>
                <div className="subemail">
                  <form className="flex">
                    <input
                      onClick={handleSearchOpen}
                      type="text"
                      placeholder="Search here..."
                    />
                    <button>Search</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="featured">
              <div className="container">
                <div className="border"></div>
                <div className="featuredposts">
                  <div className="feltitle flex">
                    <h3>Featured Posts :</h3>
                  </div>
                  <div className="feposts flex">
                    <Swiper
                      slidesPerView={"auto"}
                      freeMode={true}
                      spaceBetween={30}
                      className="mySwiper"
                      modules={FreeMode}
                    >
                      {loading ? (
                        <div className="flex flex-center wh_50">
                          <Spinner />
                        </div>
                      ) : (
                        <>
                          {sliderpubdata.slice(0, 6).map((blog) => {
                            return (
                              <SwiperSlide key={blog._id}>
                                <div className="fpost" key={blog._id}>
                                  <Link href={`/blogs/${blog.slug}`}>
                                    <img
                                      src={blog.images[0]}
                                      alt={blog.title}
                                    />
                                  </Link>
                                  <div className="fpostinfo">
                                    <div className="tags flex">
                                      {blog.blogcategory.map((cat) => {
                                        return (
                                          <Link
                                            href={`/blogs/category/${cat}`}
                                            className="ai"
                                          />
                                        );
                                      })}
                                    </div>
                                    <h2>
                                      <Link href={`/blogs/${blog.slug}`}>
                                        {blog.title}
                                      </Link>
                                    </h2>
                                    <div className="fpostby flex">
                                      <img src="/img/coder.png" alt="ayad" />
                                      <p>By mohamed ayad</p>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            );
                          })}
                        </>
                      )}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="populartegssec">
          <div className="container">
            <div className="border"></div>
            <div className="populartegsdata">
              <div className="fetitle">
                <h3>Popular</h3>
              </div>
              <div className="poputegs">
                <Link href="/blogs/category/Web Development" className="pteg">
                  <FaLaptopCode size={150} />
                  <div className="tegs">
                    <div className="apps">
                      <div>Web</div>
                    </div>
                  </div>
                </Link>
                <Link href="/blogs/category/UI-UX Design" className="pteg">
                  <MdDesignServices size={150} />
                  <div className="tegs">
                    <div className="apps">
                      <div>UI/UX</div>
                    </div>
                  </div>
                </Link>
                <Link href="/blogs/category/Graphic Design" className="pteg">
                  <MdOutlineDesignServices size={150} />
                  <div className="tegs">
                    <div className="apps">
                      <div>Graphic</div>
                    </div>
                  </div>
                </Link>
                <Link href="/blogs/category/AI technology" className="pteg">
                  <FaBrain size={150} />
                  <div className="tegs">
                    <div className="apps">
                      <div>AI</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="latestpostsec">
          <div className="container">
            <div className="border"></div>
            <div className="latestpostsdata">
              <div className="fatitle">
                <h3>Latest Articles</h3>
              </div>
              <div className="latestposts">
                {loading ? (
                  <div className="flex flex-center wh_50">
                    <Spinner />
                  </div>
                ) : (
                  <>
                    {publishedData.map((blog) => {
                      return (
                        <div className="lpost" key={blog._id}>
                          <div className="lpostimg">
                            <Link href={`/blogs/${blog.slug}`}>
                              <img src={blog.images[0]} alt={blog.title} />
                            </Link>
                            <div className="tegs">
                              {blog.blogcategory.map((cat) => {
                                return (
                                  <Link
                                    href={`/blogs/category/${cat}`}
                                    className="ai"
                                  >
                                    <span></span>
                                    {cat}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                          <div className="lpostinfo">
                            <h3>
                              <Link href={`/blogs/${blog.slug}`}>
                                {blog.title}
                              </Link>
                            </h3>
                            <h4 className="flex">
                              <img src="/img/coder.png" alt="ayad" />
                              By mohamed Ayad
                            </h4>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
            {publishedData.length === 0 ? (
              ""
            ) : (
              <div className="blogspaginationbtn flex flex-center mt-3">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                {pageNumbers
                  .slice(
                    Math.max(currentPage - 3, 0),
                    Math.min(currentPage + 2, pageNumbers.length)
                  )
                  .map((number) => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`${currentPage === number ? "active" : ""}`}
                    >
                      {number}
                    </button>
                  ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentBlogs.length < perPage}
                >
                  Next
                </button>
              </div>
            )}
          </div>
          {searchInput ? <Blogsearch cls={handleSearchClose} /> : null}
        </section>
      </div>
    </>
  );
}
