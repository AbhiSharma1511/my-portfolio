import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>
        <div className="text-xl mt-5">
          <p>
            Welcome to my portfolio website! My name is Abhinav Sharma. As a
            fresh graduate in the final year of my B.Tech program, I have two
            years of hands-on experience in building and designing Android
            applications using Java. Currently, I am transitioning into a Full
            Stack MERN (MongoDB, Express.js, React.js, Node.js) Developer,
            where I am expanding my skill set to encompass web development
            technologies. With a passion for learning and a drive to excel, I
            am eager to embark on new projects and contribute to innovative
            solutions in the software industry.
          </p>
          <hr className="my-8 border-t-2 border-gray-300" />
          <p>
            I have experience with the following technologies:
          </p>
          <ul className="list-disc list-inside">
            <li>Programming Languages: Java, C, C++</li>
            <li>
              Web Technology: HTML, CSS, JavaScript, React.js(Basic), Nodejs,
              Express.js
            </li>
            <li>Android Technology: XML, Kotlin(Basic) </li>
            <li>Data Visualization: Microsoft Power BI</li>
          </ul>
          <p>
            Currently, I am focused on learning full-stack development with the
            MERN stack. I am always eager to learn new technologies and
            programming languages to stay up-to-date with the latest trends in
            the industry.
          </p>
          <p>
            In my free time, I enjoy studying science and tech books to further
            expand my knowledge in these fields. I also have a passion for
            sports and actively participate in various sports activities.
            Additionally, I love playing cricket and football, which helps me
            stay physically active and balanced.
          </p>
          <p>
            In addition to my technical skills, I strongly believe in the power
            of collaboration and teamwork to achieve great things.
          </p>
          <p>
            Thank you for visiting my portfolio website, and please feel free
            to contact me for any inquiries or opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
