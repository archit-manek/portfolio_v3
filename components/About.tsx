import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        opacity: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://media-exp1.licdn.com/dms/image/C5603AQGG9NYAcVLCWA/profile-displayphoto-shrink_800_800/0/1653835766676?e=1674086400&v=beta&t=qhhQYi4dHvHsDBGon4X55u4lO2BaiZTghuwC0A_DbE0"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-full md:h-64 md:w-64 xl:w-[400px] xl:h-[400px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#3598DB]/40">little</span>{" "}
          background
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
          amet malesuada libero. Quisque nunc quam, varius et aliquet et,
          faucibus semper tellus. Quisque at mattis felis, ut egestas lectus.
          Etiam quis mi dui. Nulla lobortis ipsum eu sapien porta viverra. Etiam
          placerat lacinia nunc, eu pretium nulla rhoncus ut. Proin aliquam
          dolor gravida nisl iaculis, non ultrices est volutpat. Nunc vel libero
          dui. Morbi convallis euismod dui et facilisis. Mauris maximus massa
          quis dolor tincidunt, ullamcorper congue ligula commodo.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
