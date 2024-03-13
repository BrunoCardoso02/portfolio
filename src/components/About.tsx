import React from 'react';
import { LuUser } from "react-icons/lu";


const About: React.FC = () => {
  return (
    <section id="about" className=" xl:min-w-[450px] 2xl:w-full flex flex-col sm:gap-10 lg:gap-10 xl:gap-14 sm:mb-12 lg:mb-32 xl:mb-48 2xl:mb-48 py-20">
        <div className="w-40 p-2 border border-second-gray rounded-full flex flex-row gap-3 items-center justify-center">
          <i>
            <LuUser color="#fff" size={19} />
          </i>
          <h3 className=" text-amber-50 text-md">
            ABOUT
          </h3>
        </div>
        <h1 className=" sm:text-[1.2rem] md:text-[2.5rem] lg:text-[1.4rem] xl:text-4xl 2xl:text-5xl xl:leading-snug 2xl:leading-tight text-amber-50 text-wrap font-hairline font-inter ">
          Hello everyone! <span className="text-sky-500">How are you?</span>
        </h1>
        <div className="flex flex-row flex-wrap gap-5">
          <p className="text-third-gray sm:text-[0.9rem] md:text-[1.1rem] lg:text-[0.9rem] xl:text-lg text-pretty">My name is Bruno Cardoso, from Brazil, born in 2004. I am a Full-Stack developer with extensive experience in web development, having had my first contact with programming approximately 5 years ago, building web pages for fun and curiosity.</p>
          
          <p className="text-third-gray sm:text-[0.9rem] md:text-[1.1rem] lg:text-[0.9rem] xl:text-lg text-left">After graduating from high school, I entered college, majoring in Analysis and Systems Development at FIAP, where I graduated in December 2023. Before that, I sought to acquire basic knowledge through some online courses that helped me gain a general understanding of technology.</p>

          <p className="text-third-gray sm:text-[0.9rem] md:text-[1.1rem] lg:text-[0.9rem] xl:text-lg text-left">In my free time, I enjoy watching football, movies, series, listening to music, and exploring the vast world of the web.</p>
        </div>
      </section>
  );
}

export default About;