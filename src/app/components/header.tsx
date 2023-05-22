import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { pages } from '../../data/fakeData';

interface HeaderProps {
  aboutMeData: { name: string };
  pages: Array<{ label: string; link: string; id: number }>;
}

const Header = ({ aboutMeData, pages }: HeaderProps) => {
  return (
    <header className='flex flex-col relative bg-linear-557AFF w-full h-48'>
      <div className='flex flex-col justify-around h-full px-6 bg-header z-10'>
        <nav className='text-right flex flex-row gap-6 self-end'>
          {pages.map((page) => (
            <Link
              aria-label={page.label}
              href={page.link}
              key={page.id}
              className='px-6 py-2 min-w-100 hover:bg-blue-light hover:text-blue font-display uppercase tracking-wide'
            >
              {page.label}
            </Link>
          ))}
        </nav>
        <h1 className='text-white uppercase'> {aboutMeData.name}</h1>
      </div>
      <Image
        priority
        height={400}
        width={2000}
        className='w-full h-48 object-cover object-top absolute mb-6'
        src='/img/jeshoots-com-pUAM5hPaCRI-unsplash.jpg'
        alt={`Image of ${aboutMeData.name}`}
        aria-label=''
      />
    </header>
  );
};

export default Header;
