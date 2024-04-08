import React from "react";
import TakeNotePng from "../assets/portfolio/TakeNotePng.png";
import blogsite from "../assets/portfolio/blogsite.png";
import instahome from "../assets/portfolio/instahome.png";
import bookstore from "../assets/portfolio/bookstore.png";
import portfolio from "../assets/portfolio/portfolio.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: TakeNotePng,
      title:"Take Note: Android App using Room Database",
      link: "https://github.com/AbhiSharma1511/Take-Note"
    },
    {
      id: 2,
      src: bookstore,
      title:"Book Store: An android application using Firebase",
      link: "https://github.com/AbhiSharma1511/my_books_android"
    },
    {
      id: 3,
      src: instahome,
      title:"Instagram Clone: Android App using firebase",
      link: "https://github.com/AbhiSharma1511/my_instagram_clone"
    },
    {
      id: 4,
      src: portfolio,
      title:"Portfolio: Web app using reactjs",
      link: "https://github.com/AbhiSharma1511/my-portfolio"
    },
    {
      id: 5,
      src: blogsite,
      title:"Page Of Wonder: Blog Website MERN",
      link: "https://github.com/AbhiSharma1511/mern_blog_site"
    },
    {
      id: 6,
      src: reactWeather,
      title:"Weather App: Web app using Javascript",
      link: "https://github.com/AbhiSharma1511/weather_web_app"
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-10">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolios.map(({ id, src, title, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 justify-center "
              />
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button> */}
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
                <p className="font-semibold">{title}</p>
                <a className="w-1/2 flex flex-row items-center justify-center m-4 duration-200 hover:scale-105 hover:cursor-pointer" href={link} src={link}>
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
