import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark,handleChange }) => {
  const {
    author,
    author_img,
    cover,
    posted_date,
    reading_time,
    title,
  } = blog;
  return (
    <div className=" pb-10">
      <div className="card bg-base-100 w-full px-6 md:px-0 md:w-96 shadow-sm">
        <figure>
          <img src={cover} />
        </figure>
        <div className="card-body space-y-2 ">
          <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 ">
                    <img className="w-10 h-10 object-cover rounded-full cursor-pointer" src={author_img} alt= {author} />
                  <div className="">
                    <h1> {posted_date}</h1>
                    <h1 className="font-medium">{author}</h1>
                  </div>
              </div>
            <div onClick={() => handleBookMark(blog)} className="cursor-pointer">
              <FaBookmark onClick={handleChange} size={20}></FaBookmark>
            </div>
          </div>
              <h2 className="card-title">{title}</h2>
            <div className="flex flex-row">
              <div className="flex gap-2">
                {
                  blog.hashtags.map((has,idx) => <p key={idx} className="text-blue-600 underline cursor-pointer"> #{has}</p>)
                }
            </div>
            </div>
          <div className="card-actions justify-between items-center">
            <h1 className="font-semibold text-lg hover:underline cursor-pointer"> {reading_time} </h1>
            <button className="btn btn-primary">Mark As Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
