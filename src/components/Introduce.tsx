import React from 'react';
import { LiaHomeSolid } from "react-icons/lia";

// import { Container } from './styles';

const Introduce: React.FC = () => {
  return (
    <header className="flex flex-col sm:gap-10 lg:gap-8 xl:gap-10 2xl:gap-14 sm:mb-24 lg:mb-52 xl:mb-36 2xl:mb-48 sm:mt-5 lg:mt-0">
    <div className="w-48 p-2 border border-second-gray rounded-full flex flex-row gap-3 items-center justify-center">
      <i>
        <LiaHomeSolid color="#fff" size={19} />
      </i>
      <h3 className=" text-amber-50 text-md">
        INTRODUCE
      </h3>
    </div>
    <h1 className=" sm:text-[2rem] md:text-[4rem] md:leading-[4.8rem] lg:text-[2.39rem] xl:text-5xl 2xl:text-7xl lg:leading-tight xl:leading-snug 2xl:leading-tight text-amber-50 text-wrap font-hairline font-inter ">
      Say Hi from <span className="text-sky-500">Bruno</span>, <br /> Full-Stack Web <br /> Developer
    </h1>
    <p className="text-third-gray sm:text-[0.9rem] md:text-[1.1rem] lg:text-[0.9rem] xl:text-lg text-left">
      Full Stack Developer with a focus on web and mobile applications graduated in Systems Analysis and Development, specialized in creating and maintaining complete digital solutions.
    </p>
  </header>
  );
}

export default Introduce;