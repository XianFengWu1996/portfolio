import Image from 'next/image';
import Link from 'next/link';

import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const handleOpen = () => {
    setNav(true);
  };

  const handleClose = () => {
    setNav(false);
  };

  return (
    <div
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]'
          : 'fixed w-full h-20 z-[100] bg-[#ecf0f3]'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-5 2xl:px-16 ">
        <div>
          <Image
            src="/assets/images/navLogo.png"
            alt="/"
            width={70}
            height={20}
          />
        </div>

        <div>
          <ul className="hidden md:flex">
            <Link
              href="/"
              scroll={false}
              className="ml-10 text-sm uppercase hover:border-b"
            >
              Home
            </Link>
            <Link
              href="#about"
              scroll={false}
              className="ml-10 text-sm uppercase hover:border-b"
            >
              About
            </Link>
            <Link
              href="#skills"
              scroll={false}
              className="ml-10 text-sm uppercase hover:border-b"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              scroll={false}
              className="ml-10 text-sm uppercase hover:border-b"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              scroll={false}
              className="ml-10 text-sm uppercase hover:border-b"
            >
              Contact
            </Link>
          </ul>

          <div className="md:hidden" onClick={handleOpen}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] ease-in duration-500 px-7 py-3'
              : 'fixed left-[-100%] ease-in duration-500'
          }
        >
          <div>
            <div className="flex justify-between items-center w-full">
              <div>
                <Image
                  src="/assets/images/navLogo.png"
                  alt="/"
                  height={35}
                  width={87}
                />
              </div>

              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={handleClose}
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4 overflow-scroll">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something legendary together
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/" scroll={false}>
                <li onClick={handleClose} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about" scroll={false}>
                <li onClick={handleClose} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills" scroll={false}>
                <li onClick={handleClose} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects" scroll={false}>
                <li onClick={handleClose} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact" scroll={false}>
                <li onClick={handleClose} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>

            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&apos;s Connect
              </p>

              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <FaLinkedinIn />
                </div>

                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <FaGithub />
                </div>

                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <AiOutlineMail />
                </div>

                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
