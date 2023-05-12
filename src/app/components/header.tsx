import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = ({ aboutMeData, pages }) => {
  return (
    <header className='flex flex-col relative bg-linear-557AFF w-full h-48'>
      <div className=''>
        <nav className=''>
          {pages.map((page) => (
            <Link
              aria-label={page.label}
              href={page.link}
              key={page.id}
              className=''
            >
              {page.label}
            </Link>
          ))}
        </nav>
        <h1 className=''> {aboutMeData.name}</h1>
      </div>
      <Image
        priority
        height={400}
        width={2000}
        className=''
        src='/img/jeshoots-com-pUAM5hPaCRI-unsplash.jpg'
        alt={`Image of ${aboutMeData.name}`}
        aria-label=''
      />
    </header>
  );
};

export default Header;
