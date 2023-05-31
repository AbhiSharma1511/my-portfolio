import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20 '>
            Welcome to my portfolio website! I am a Java-based Intermediate Android developer and a fresher who wants to learn
            new things
            . My passion for technology and programming led me to pursue a career in software development, 
            specifically in the field of mobile app development and java application.

            As an Android developer, I am skilled in Java programming, Android Studio, and 
            various Android development frameworks. I have experience in building responsive, 
            user-friendly, and high-performance Android applications that meet the needs of clients 
            and end-users.
            </p>
            <br/>
            <hr/>
            <p className='text-xl'>
              <br/>
              I learn language - Basic C and C++<br/>
              Frontend Languages- Basic HTML, CSS, Javascript and React<br/>
              <b>Data Visualization- Microsft Power BI<br/></b>
              Currenty i am learning full stack java.<br/><br/>
            I am always eager to learn new technologies and programming languages to stay up-to-date with the latest trends in the industry.

            In my free time, I learn data visualization and participating in hackathons, attending tech conferences, and contributing to open-source projects. 
            I believe in the power of collaboration and teamwork to achieve great things.
            </p>
            <br/>
            <p className='text-xl'>
            Thank you for visiting my portfolio website, and please feel free to contact me for any inquiries or opportunities.
            </p>
        </div>

    </div>
  )
}

export default About