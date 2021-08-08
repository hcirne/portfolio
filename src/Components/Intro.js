export default function Intro() {
  return (
    <div className="grid bg-light h-half w-full sm:h-screen">
      {/* Text */}
      <div className="place-self-center text-center p-4">
        <h1 className="font-bold text-lg sm:text-2xl">Hello, I'm Henrique</h1>
        <h2 className="font-light text-md sm:text-xl">
          A self-taught Front-end developer from Portugal.
        </h2>
      </div>

      {/* Arrow Down */}
      <div className="absolute invisible sm:visible bottom-36 left-1/2 transform -translate-x-1/2 ">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce h-4 w-4 sm:h-6 sm:w-6 "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
