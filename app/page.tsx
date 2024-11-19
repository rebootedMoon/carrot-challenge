export default function Home() {
  const cities = [
    "Vancouver",
    "Seattle",
    "Portland",
    "San Francisco",
    "Los Angeles",
    "San Diego",
  ];
  return (
    <main className="bg-white h-screen flex items-center justify-center p-10">
      <div className="bg-yellow-400 px-5 pt-64  shadow-lg rounded-3xl w-3/4 max-w-screen-sm">
        <div className="flex flex-col">
          <span className="text-sm font-bold mb-2">
            Select Destination
          </span>
          <div className="bg-black w-full h-0.5" />
        </div>
        <div className="py-3 ">
          {cities.map((city, index) => (
            <div
              key={index}
              className="flex gap-4 items-center mb-4 group"
            >
              <span className="flex items-center justify-center size-6 bg-black  rounded-full text-yellow-300 text-md font-bold group-hover:bg-white">
                {city[0]}
              </span>
              <span className="text-4xl font-bold group-hover:text-white">
                {city}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
