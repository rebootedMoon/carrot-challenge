export default function Home() {
  return (
    <main className="bg-orange-400 flex h-screen w-full items-center justify-center">
      <div className="bg-gray-100 px-5   shadow-lg rounded-3xl w-full max-w-sm">
        <div className="pt-4 flex gap-2 border-b-2 border-neutral-300">
          <span className="pb-1 text-md font-bold"> March 2021</span>
          <svg
            className="flex relative top-1 size-6 text-neutral-400"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            ></path>
          </svg>
        </div>

        <div className="flex flex-col items-center pt-6 *:font-semibold *:text-md">
          <span> Hello, Bruno!</span>
          <span> Your medicines for today </span>
        </div>
        <div className="pt-6 flex justify-between *:flex *:flex-col *:items-center *:justify-center *:gap-2">
          <div className="hover:bg-blue-300 w-16 h-20 rounded-3xl ">
            <span className="text-3xl font-semibold">16</span>
            <span className="font-medium">Mon</span>
          </div>
          <div className="hover:bg-blue-300 w-16 h-20 rounded-3xl ">
            <span className="text-3xl font-semibold">17</span>
            <span className="font-medium">Tue</span>
          </div>
          <div className="hover:bg-blue-300 w-16 h-20 rounded-3xl ">
            <span className="text-3xl font-semibold">18</span>
            <span className="font-medium">Wed</span>
          </div>
          <div className="hover:bg-blue-300 w-16 h-20 rounded-3xl ">
            <span className="text-3xl font-semibold">19</span>
            <span className="font-medium">Thu</span>
          </div>
          <div className="hover:bg-blue-300 w-16 h-20 rounded-3xl ">
            <span className="text-3xl font-semibold">20</span>
            <span className="font-medium">Fri</span>
          </div>
          <div className="hover:bg-blue-300 w-16 h-20 rounded-3xl ">
            <span className="text-3xl font-semibold">21</span>
            <span className="font-medium">Sat</span>
          </div>
        </div>
        <div className="pt-20" />
        <div className="flex flex-col gap-2">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleBox1"
              className="hidden peer"
            />
            <label
              htmlFor="toggleBox1"
              className="flex flex-col w-full h-48 bg-yellow-300 rounded-2xl justify-between py-4 pl-4 cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-semibold">
                  Nora-BE
                </span>
                <span className="text-xs font-medium">
                  Norenthindrone - 0.35mg
                </span>
              </div>
              <div>
                <span className="text-xs font-medium">7h30AM</span>
              </div>
            </label>
            <div className="absolute top-0 right-0 w-12 h-full bg-blue-500 rounded-tr-2xl rounded-br-2xl flex items-center justify-center opacity-0 peer-checked:opacity-100 transition duration-300">
              <span className="text-white text-xl font-bold">✓</span>
            </div>
          </div>
          <div className="relative">
            <input
              type="checkbox"
              id="toggleBox2"
              className="hidden peer"
            />
            <label
              htmlFor="toggleBox2"
              className="flex flex-col w-full h-48 bg-green-300 rounded-2xl justify-between py-4 pl-4 cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-semibold">Feosol</span>
                <span className="text-xs font-medium">
                  Ferrous Sulfate - 600mg
                </span>
              </div>
              <div>
                <span className="text-xs font-medium">7h30AM</span>
              </div>
            </label>
            <div className="absolute top-0 right-0 w-12 h-full bg-blue-500 rounded-tr-2xl rounded-br-2xl flex items-center justify-center opacity-0 peer-checked:opacity-100 transition duration-300">
              <span className="text-white text-xl font-bold">✓</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
