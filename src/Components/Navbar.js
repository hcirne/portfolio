import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          {/* Logo */}
          <div>
            <a href="/">
              <p className="text-gray-700 text-5xl font-black italic py-3 px-3">
                hc
              </p>
            </a>
          </div>

          <div className="flex items-center space-x-10 ">
            {/* Work Link */}
            <div>
              <a href="/" className="text-gray-700 text-xl font-bold py-3 px-3">
                work
              </a>
            </div>

            {/* Resume Link */}
            <div>
              <a href="/" className="text-gray-700 text-xl font-bold py-3 px-3">
                <p className="rounded-full bg-red">resume</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
