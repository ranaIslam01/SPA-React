import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookMark,handleChange}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  console.log(blogs);

  return <div>
    <h1 className="text-2xl font-semibold py-8"> Total Blogs: {blogs.length}</h1>

    <div className="grid grid-cols-1 lg:grid-cols-2 md:pl-5">
      {
        blogs.map((blog) => (
          <Blog key = {blog.id} handleBookMark = {handleBookMark} handleChange = {handleChange} blog = {blog} ></Blog>
        ))
      }
    </div>
  </div>;
};

export default Blogs;
