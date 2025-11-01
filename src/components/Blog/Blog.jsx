import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark }) => {
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
        <div className="card-body space-y-3 ">
          <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 ">
                    <img className="w-10 h-10 object-cover rounded-full cursor-pointer" src={author_img} alt= {author} />
                  <div className="">
                    <h1> {posted_date}</h1>
                    <h1 className="font-medium">{author}</h1>
                  </div>
              </div>
            <div onClick={handleBookMark} className="flex items-center gap-2 cursor-pointer">
              <h1 className="font-semibold text-base"> {reading_time} </h1>
              <FaBookmark></FaBookmark>
            </div>
          </div>
              <h2 className="card-title">{title}</h2>
            <div className="flex gap-2 justify-center">
                {
                  blog.hashtags.map((has,idx) => <p key={idx} className="text-blue-600 underline  rounded-md cursor-pointer"> {has}</p>)
                }
            </div>
          <div className="card-actions flex justify-center">
            <button className="btn btn-primary">Mark As Read</button>
            <button className="btn btn-primary">Mark As Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
