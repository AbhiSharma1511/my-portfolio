import React from "react";
import HeroImage from "../assets/icon2.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 flex flex-col justify-center items-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center px-4 lg:flex-row md:flex-col">
        <div className="flex flex-col justify-center text-center lg:text-left lg:pr-16">
          <h2 className="text-5xl md:text-4xl sm:text-2xl font-bold text-white">
            Hey... I'm Abhinav Sharma, a dynamic Full Stack Android and Web
            Developer,
          </h2>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white inline-flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 my-2 mt-10"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="My Profile"
            className="rounded-2xl w-96 h-auto lg:w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
