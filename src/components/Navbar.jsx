import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="logo bg-slate-300 text-gray-800 kalam-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex justify-center">
        <span className="p-4 sm:p-7">
          <a href="/">Todo Diary</a>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
