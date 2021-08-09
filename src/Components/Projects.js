export default function Projects(props) {
  return (
    <div
      className="bg-light w-screen h-half flex justify-center items-center px-8"
      id="projects"
    >
      <div className="bg-white container max-w-6xl rounded-2xl shadow-lg flex">
        {/* Info */}
        <div className="p-6">
          <h1 className="font-bold text-md sm:text-lg">{props.title}</h1>
          <h2 className="font-light text-md sm:text-lg">{props.info}</h2>
        </div>
        {/* Thumbnail */}
      </div>
    </div>
  );
}
