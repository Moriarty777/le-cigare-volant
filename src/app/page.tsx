import { House, Building2, Utensils, CalendarDays, MapPin } from "lucide-react";
import { Merriweather, Dancing_Script } from "next/font/google";
import Image from "next/image";
import Menu from "./components/Menu";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dancing_script = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#6B5B4B] p-4 shadow-md z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-1 text-2xl">
            🍷
            <a
              href="#"
              className={`text-[#FFD700] text-2xl ${dancing_script.className} hover:text-[#E78A43] transition`}
            >
              Le Cigare Volant
            </a>
          </div>

          {/* Navigation Links */}
          <ul
            className={`${merriweather.className} hidden md:flex space-x-8 text-[#FFD700] tracking-wide font-normal`}
          >
            <li>
              <a
                href="#home"
                className="flex items-center gap-1 hover:text-[#E78A43] transition cursor-pointer"
              >
                <House size={20} /> HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="flex items-center gap-1 hover:text-[#E78A43] transition cursor-pointer"
              >
                <Building2 size={20} /> ABOUT
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="flex items-center gap-1 hover:text-[#E78A43] transition cursor-pointer"
              >
                <Utensils size={20} /> MENU
              </a>
            </li>
            <li>
              <a
                href="#reservation"
                className="flex items-center gap-1 hover:text-[#E78A43] transition cursor-pointer"
              >
                <CalendarDays size={20} /> RESERVATION
              </a>
            </li>
            <li>
              <a
                href="#location"
                className="flex items-center gap-1 hover:text-[#E78A43] transition cursor-pointer"
              >
                <MapPin size={20} /> LOCATION
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        {/* Hero */}
        <section
          id="home"
          className="flex items-center justify-center h-screen bg-[url('/images/rest2.jpeg')] bg-fixed bg-cover bg-center relative"
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Text Content */}
          <div className="relative text-center text-white z-10">
            <h1 className="text-5xl font-semibold font-serif text-[#FFD700] drop-shadow-lg">
              Dr. Frasier Crane’s{" "}
              <span className={dancing_script.className}>Le Cigare Volant</span>
            </h1>
            <div className="mt-2 text-2xl italic text-[#E78A43]">
              The food here is to die for...
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 bg-[#F6F1ED] text-[#6B5B4B]">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-[#FFD700]">About Us</h2>
            <p className="mt-2 text-lg italic">
              A sophisticated dining experience, curated by Dr. Frasier Crane
              himself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-6 px-12 py-8">
            {/* Image Section */}
            <div className="flex justify-center">
              <Image
                src="/images/fr.jpeg"
                alt="Dr. Frasier Crane"
                width={300}
                height={300}
                quality={100}
                className="rounded-full border-4 border-[#FFD700] shadow-xl object-cover aspect-square max-w-[200px] md:max-w-[300px]"
              />
            </div>

            {/* Text Section */}
            <div className="max-w-3xl mx-auto text-start text-lg">
              <p>
                Welcome to{" "}
                <span className="font-semibold">Le Cigare Volant</span>. Since
                1990, we have offered
                <span className="text-[#E78A43]">
                  {" "}
                  Traditional French Cuisine
                </span>{" "}
                and
                <span className="text-[#E78A43]"> exquisite wines</span> of the
                highest quality.
              </p>
              <p className="mt-4">
                After his venture in radio,{" "}
                <span className="font-semibold">Dr. Frasier Crane</span> sought
                a new way to serve Seattle. At{" "}
                <span className="italic">Le Cigare Volant</span>, we bring you a
                <span className="font-bold">
                  {" "}
                  sophisticated dining experience
                </span>{" "}
                that even
                <span className="font-bold"> Gil Chesterton</span> has deemed
                <span className="italic"> &quot;exquisite!&quot;</span>
              </p>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section
          id="menu"
          className="flex justify-center items-center bg-[url('/images/rest3.jpeg')] bg-fixed bg-cover bg-center relative h-screen"
        >
          <div className="absolute inset-0 bg-black/30" />
          <Menu />
        </section>
      </main>
    </>
  );
}
