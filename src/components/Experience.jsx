import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import javapng from "../assets/javapng.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.jpg";
import node from "../assets/node.png"

const Experience = () => {
  const images = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'Basic CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'Basic Javascript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: javapng,
      title: 'Java',
      style: 'shadow-white'
    },
    {
      id: 6,
      src: node,
      title: 'Node Js',
      style: 'shadow-pink-400'
    },
    {
      id: 7,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400'
    },
    {
      id: 8,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id: 9,
      src: figma,
      title: 'Figma',
      style: 'shadow-sky-400'
    },
  ];

  return (
    <div name="experience" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">Experience</p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-4 sm:px-0 text-center">
          {images.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md rounded-lg duration-500 hover:scale-105 py-4 ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

