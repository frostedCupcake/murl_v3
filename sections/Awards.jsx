'use client';
import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col my-2`}
    >
      <TypingText title="EVENTS" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[25px] text-[16px] text-left text-secondary-white"
      >
        1. Dr. Avinash Eranki was awarded the '
        <span className="font-extrabold text-white">
          2020 Bracco Imaging Distinguished Young Investigator Award
        </span>
        ' in November 2020 by the Focused Ultrasound Foundation and, Bracco
        Suisse SA for his scientific contributions to the field.
        <br />
        2. Editorial Board member of Ultrasound in{' '}
        <span className="font-extrabold text-white">
          Medicine and Biology Journal
        </span>{' '}
        since 2018.
      </motion.p>
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col my-2`}
    >
      <TypingText title="GRANTS" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[25px] text-[16px] text-left text-secondary-white"
      >
        <span className="font-extrabold text-white">MURL</span> is current
        funded by Department of Science and Technology (DST), and IIT Hyderabad
        on developing novel technology for diagnostic and therapeutic
        ultrasound.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
