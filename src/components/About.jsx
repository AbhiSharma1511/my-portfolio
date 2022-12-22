import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20 '>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Saepe reiciendis recusandae maiores suscipit porro impedit 
                vero sequi dignissimos asperiores obcaecati assumenda quisquam 
                provident hic, deserunt velit modi dolore molestias natus culpa? 
                Magnam, suscipit dolor vitae corporis quo fuga autem voluptas, soluta
                 laborum, pariatur architecto temporibus molestiae natus aut? Minima, 
                 excepturi?
            </p>
            <br/>
            <hr/>
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos
                 corporis omnis quidem maxime exercitationem sint recusandae consequuntur!
                  Libero impedit odit quasi facere temporibus dolore, expedita quod eligendi
                   fugit officia, adipisci, similique nulla dolorum velit illum totam repellendus.
                    Natus laborum sed unde doloremque harum velit blanditiis atque iure delectus eius.
            </p>
        </div>

    </div>
  )
}

export default About