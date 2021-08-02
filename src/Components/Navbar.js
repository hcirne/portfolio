export default function Navbar() {
  return (
    <nav className="bg-light absolute w-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {/* Logo */}
          <a href="/">
            <p
              className="text-dark text-3xl sm:text-5xl font-black italic py-3 px-5
															transition duration-300 ease-in-out transform-gpu hover:scale-105"
            >
              hc
            </p>
          </a>
          <div className="flex items-center space-x-5 md:space-x-10">
            {/* Work Link */}
            <div>
              <a
                href="/"
                className="flex text-dark text-sm sm:text-xl font-bold
												   transition duration-300 ease-in-out transform-gpu hover:scale-105"
              >
                work
              </a>
            </div>

            {/* Resume Link */}
            <div>
              <a
                href="../assets/CVH.pdf"
                className="flex text-dark text-sm sm:text-xl font-bold pr-5
													 transition duration-300 ease-in-out transform-gpu hover:scale-105"
                download
              >
                resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
