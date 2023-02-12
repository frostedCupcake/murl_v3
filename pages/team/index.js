'use client';

import { motion } from 'framer-motion';

import styles from '../../styles';
import React from 'react';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion';
import { TeamCard } from '../../components';
import { teamData } from '../../constants';

const page = () => {
  return (
    <section className={`${styles.paddings} relative z-10 `}>
      <div className="md:block hidden gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col my-2`}
      >
        <motion.h1
          variants={textVariant(0.5)}
          className="font-normal xl:text-[80px] sm:text-[40px] text-[30px]  uppercase text-white tracking-wide mb-[2rem]"
        >
          MURL TEAM
        </motion.h1>
        <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
          <motion.h1
            variants={textVariant(0.6)}
            className="font-thin xl:text-[40px] sm:text-[30px] text-[20px]  uppercase text-white tracking-widest mb-[2rem] text-center"
          >
            Principal Investigator
          </motion.h1>
          <TeamCard
            img={teamData[0].img}
            name={teamData[0].name}
            currentDesignation={teamData[0].currentDesignation}
            prevDesignation={teamData[0].prevDesignation}
            email={teamData[0].email}
          />
        </motion.div>

        <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
          <motion.h1
            variants={textVariant(1.2)}
            className="font-thin xl:text-[40px] sm:text-[30px] text-[20px]  uppercase text-white tracking-widest mb-[2rem] text-center"
          >
            Post-Doctoral Fellows
          </motion.h1>
          <TeamCard
            img={teamData[1].img}
            name={teamData[1].name}
            currentDesignation={teamData[1].currentDesignation}
            prevDesignation={teamData[1].prevDesignation}
            email={teamData[1].email}
          />
        </motion.div>
        <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
          <motion.h1
            variants={textVariant(1.2)}
            className="font-thin xl:text-[40px] sm:text-[30px] text-[20px]  uppercase text-white tracking-widest mb-[2rem] text-center"
          >
            Doctoral Fellows
          </motion.h1>

          <TeamCard
            img={teamData[2].img}
            name={teamData[2].name}
            currentDesignation={teamData[2].currentDesignation}
            prevDesignation={teamData[2].prevDesignation}
            email={teamData[2].email}
          />
          <TeamCard
            img={teamData[3].img}
            name={teamData[3].name}
            currentDesignation={teamData[3].currentDesignation}
            prevDesignation={teamData[3].prevDesignation}
            email={teamData[3].email}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default page;
