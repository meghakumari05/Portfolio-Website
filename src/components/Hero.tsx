"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn } from '@/utils/animations';

function Hero() {
  return (
    <section className='py-28 container max-w-7xl mx-auto px-4'>
    <div className='max-w-3xl mx-auto text-center'>
      <motion.div 
      {...scaleIn}
      transition={{delay: 0.2}}
      className='flex flex-col items-center mb-4'>
        <Image src="/profile2.photo.png" alt='profile image' width={100} height={100} className='rounded-full mb-4 w-35 h-35
        object-cover ring-2 ring-primary'/>
      </motion.div>

      <motion.h1 {...fadeInUp} transition={{delay: 0.3}}
      className='text-4xl md:text-5xl font-bold mb-6'>Hi, I&apos;m <span className='text-primary'>Megha Kumari</span> </motion.h1>
      <motion.p {...fadeInUp} transition={{delay: 0.5}} className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'>Full Stack Developer </motion.p>

        <motion.div {...fadeInUp}
            transition={{ delay: 0.5 }}
        className='flex justify-center space-x-4 mb-8'>

         <motion.a href="https://github.com/meghakumari05" whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
         className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors 
        duration-300 
        '>
            <FaGithub />
         </motion.a>

         <motion.a href="https://www.linkedin.com/in/megha-kumari-05716b274/" whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
         className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors 
        duration-300 '>
            <FaLinkedin />
           </motion.a>
        </motion.div>

        <motion.div 
        {...fadeInUp}
            transition={{ delay: 0.6 }}
        className='flex flex-col md:flex-row justify-center gap-4'>
            <Link href="/projects" className='bg-primary inline-block w-full md:w-auto text-white 
            px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors'>View Projects</Link>

            
            <Link href="/contact" className='bg-gray-500 inline-block w-full md:w-auto text-white 
            px-8 py-3 rounded-lg hover:text-gray-800 hover:bg-gray-300 transition-colors'>Contact Me</Link>
        </motion.div>

    </div>
    </section>
  )
}

export default Hero;
