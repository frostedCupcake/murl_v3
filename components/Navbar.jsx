'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const hiddenClass = 'hidden w-full md:block md:w-auto';
  const normalClass = 'w-full md:block md:w-auto';
  const pathname = usePathname();
  const [hidden, setHidden] = useState(true);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className={`${styles.xPaddings} py-8 sticky top-0 z-50`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between flex-wrap relative items-center gap-8`}
      >
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            MURL
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => {
            setHidden((prev) => !prev);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className={hidden ? hiddenClass : normalClass} id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-red rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-murl-black uppercase transition-all">
            <li>
              <Link
                href="/"
                className={
                  pathname === '/'
                    ? 'block font-bold py-2 pr-4 pl-3 text-white bg-[#9803fc] rounded md:bg-transparent  md:text-[#9803fc] md:p-0  transition-all'
                    : 'block font-bold py-2 pr-4 pl-3 text-white rounded hover:text-[#9803fc] md:hover:bg-transparent md:border-0 md:hover:text-[#9803fc] md:p-0  transition-all'
                }
                aria-current="page"
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/team/"
                className={
                  pathname === '/team'
                    ? 'block font-bold py-2 pr-4 pl-3 text-white bg-[#9803fc] rounded md:bg-transparent  md:text-[#9803fc] md:p-0  transition-all'
                    : 'block font-bold py-2 pr-4 pl-3 text-white rounded hover:text-[#9803fc] md:hover:bg-transparent md:border-0 md:hover:text-[#9803fc] md:p-0  transition-all'
                }
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/research/"
                className={
                  pathname === '/research'
                    ? 'block font-bold py-2 pr-4 pl-3 text-white bg-[#9803fc] rounded md:bg-transparent  md:text-[#9803fc] md:p-0  transition-all'
                    : 'block font-bold py-2 pr-4 pl-3 text-white rounded hover:text-[#9803fc] md:hover:bg-transparent md:border-0 md:hover:text-[#9803fc] md:p-0  transition-all'
                }
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                Research
              </Link>
            </li>
            <li>
              <Link
                href="/publications"
                className={
                  pathname === '/publications'
                    ? 'block font-bold py-2 pr-4 pl-3 text-white bg-[#9803fc] rounded md:bg-transparent  md:text-[#9803fc] md:p-0  transition-all'
                    : 'block font-bold py-2 pr-4 pl-3 text-white rounded hover:text-[#9803fc] md:hover:bg-transparent md:border-0 md:hover:text-[#9803fc] md:p-0  transition-all'
                }
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                Publications
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={
                  pathname === '/contact'
                    ? 'block font-bold py-2 pr-4 pl-3 text-white bg-[#9803fc] rounded md:bg-transparent  md:text-[#9803fc] md:p-0  transition-all'
                    : 'block font-bold py-2 pr-4 pl-3 text-white rounded hover:text-[#9803fc] md:hover:bg-transparent md:border-0 md:hover:text-[#9803fc] md:p-0  transition-all'
                }
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
