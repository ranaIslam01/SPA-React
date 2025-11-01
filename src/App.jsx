import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const handleBookMark = () => {
    console.log("click the handleBookMark");
  }
  return (
    <div>
      <Navbar></Navbar>
      
    {/* Main Container Start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center md:pb-10 md:px-10 md:gap-6">
        {/* left side start  */}
        <div className="lg:col-span-2  border">
            <Blogs handleBookMark = {handleBookMark}></Blogs>
        </div>
        {/* left side end  */}

        {/* right side start  */}
        <div className="lg:col-span-1 border">
            <h1 className="text-3xl font-semibold py-10">Selected blogs</h1>
        </div>
        {/* right side end  */}


      </div>
    </div>
  );
};

export default App;