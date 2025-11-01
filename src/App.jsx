import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [bookMarked, setBookMarked] = useState([]);
  const [change, setChange] = useState(0);

  const handleChange = () => {
    setChange(change + 1);
  }

  const handleBookMark = (blog) => {
    setBookMarked([...bookMarked,blog]);
  }
  return (
    <div>
      <Navbar change = {change}></Navbar>
      
    {/* Main Container Start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center md:pb-10 md:px-10 md:gap-6">
        {/* left side start  */}
        <div className="lg:col-span-2 ">
            <Blogs handleBookMark = {handleBookMark} handleChange = {handleChange} ></Blogs>
        </div>
        {/* left side end  */}

        {/* right side start  */}
        <div className="lg:col-span-1">
            <h1 className="text-2xl font-semibold py-8">Selected blogs</h1>

            {
              bookMarked.map((marked, idx) => <p className="bg-red-500 my-4 p-4 text-white rounded-2xl font-medium" key={idx}>{marked.title}</p>)
            }

        </div>
        {/* right side end  */}

      </div>
    </div>
  );
};

export default App;