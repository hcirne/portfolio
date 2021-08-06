function Intro() {
  return (
    <div className="relative bg-light h-half w-full sm:h-screen">
      {/* Text */}
      <div className="relative top-1/2 text-center p-4">
        <h1 className="font-bold text-lg sm:text-2xl">Hello, I'm Henrique</h1>
        <h2 className="font-light text-md sm:text-xl">
          A self-taught Front-end developer from Portugal.
        </h2>
      </div>
      {/* Arrow Down */}
      <div className="absolute left-1/2 invisible sm:visible sm:bottom-24 transform -translate-x-1/2 ">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
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
    // <div className="flex flex-col bg-light h-screen">
    //   <div className="flex flex-col mx-auto relative text-center top-2/4 px-2">
    //     <h1 className="font-bold text-lg sm:text-2xl">Hello, I'm Henrique</h1>
    //     <h2 className="font-light text-md sm:text-xl">
    //       A self-taught Front-end developer from Portugal.
    //     </h2>
    //     <div className="flex justify-center mt-60">
    //       <a href="/">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           viewBox="0 0 20 20"
    //           fill="currentColor"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Intro;
