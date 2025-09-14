'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import LocalDropdown from './LocalDropdown';

const Navbar = () => {
  const currentRoute = usePathname();

  const [activeDropdown, setActiveDropdown] = useState({
    active: true,
    dropdownName: '',
  });

  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    setActiveDropdown({ active: false, dropdownName: '' });
    setShowDropdown(false);
  }, [currentRoute]);

  useEffect(() => {
    if (activeDropdown.active) {
      // 展開動畫 300ms 後顯示 Dropdown
      const timer = setTimeout(() => setShowDropdown(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShowDropdown(false);
    }
  }, [activeDropdown]);

  return (
    <>
      <header className='fixed top-[1.4rem] md:top-[2.1rem] left-1/2 -translate-x-1/2 w-[90%] max-w-full min-h-24 z-[100]'>
        <div
          className={`${
            activeDropdown.active ? 'min-h-[400px]' : 'min-h-24'
          } w-full rounded-lg text-black bg-[#ffffffd9] backdrop-blur-[5px] transition-[min-height] duration-500 ease-in-out`}
          onMouseLeave={() =>
            setActiveDropdown({ active: false, dropdownName: '' })
          }
        >
          <div className='relative flex items-center justify-between py-4 px-12'>
            <div className='flex items-center justify-between gap-16'>
              {/* Logo */}
              <Link href='/'>
                <span className='block bg-[url(/logo.svg)] bg-contain bg-no-repeat w-[19.5rem] h-16' />
              </Link>
              {/* Navigation Links */}
              <nav>
                <ul className='flex space-x-10'>
                  <li
                    onMouseEnter={() =>
                      setActiveDropdown({
                        active: true,
                        dropdownName: 'saas',
                      })
                    }
                  >
                    <p className='block h-fit text-2xl leading-[1.05] tracking-[0.03em] relative z-[2] cursor-pointer group/saas'>
                      <span className='flex items-center gap-[0.9rem] relative text-transparent bg-gradient-to-r from-primary from-20% to-black to-30% bg-clip-text bg-size-[500%_500%] bg-position-[45%_0%] transition-background duration-300 ease-in-out group-hover/saas:bg-position-[0%_0%]'>
                        雲端服務
                        <span className='block w-[0.9rem] h-[0.9rem] relative'>
                          <span className='absolute top-1/2 left-1/2 -translate-1/2 block bg-black transition-transform duration-300 ease-in-out w-full h-[2px] group-hover/saas:bg-primary'></span>
                          <span className='absolute top-1/2 left-1/2 -translate-1/2 block bg-black transition-transform duration-300 ease-in-out w-[2px] h-full group-hover/saas:bg-primary group-hover/saas:rotate-90'></span>
                        </span>
                      </span>
                    </p>

                    {/* Dropdown Menu */}
                    {showDropdown &&
                      activeDropdown.active &&
                      activeDropdown.dropdownName === 'saas' && <Dropdown />}
                  </li>
                  <li
                    onMouseEnter={() =>
                      setActiveDropdown({
                        active: true,
                        dropdownName: 'local',
                      })
                    }
                  >
                    <p className='block h-fit text-2xl leading-[1.05] tracking-[0.03em] relative z-[2] cursor-pointer group/saas'>
                      <span className='flex items-center gap-[0.9rem] relative text-transparent bg-gradient-to-r from-primary from-20% to-black to-30% bg-clip-text bg-size-[500%_500%] bg-position-[45%_0%] transition-background duration-300 ease-in-out group-hover/saas:bg-position-[0%_0%]'>
                        本地部屬
                        <span className='block w-[0.9rem] h-[0.9rem] relative'>
                          <span className='absolute top-1/2 left-1/2 -translate-1/2 block bg-black transition-transform duration-300 ease-in-out w-full h-[2px] group-hover/saas:bg-primary'></span>
                          <span className='absolute top-1/2 left-1/2 -translate-1/2 block bg-black transition-transform duration-300 ease-in-out w-[2px] h-full group-hover/saas:bg-primary group-hover/saas:rotate-90'></span>
                        </span>
                      </span>
                    </p>

                    {/* Dropdown Menu */}
                    {showDropdown &&
                      activeDropdown.active &&
                      activeDropdown.dropdownName === 'local' && (
                        <LocalDropdown />
                      )}
                  </li>

                  <li
                    onMouseEnter={() =>
                      setActiveDropdown({ active: false, dropdownName: '' })
                    }
                  >
                    <p className='cursor-pointer'>Faqs</p>
                  </li>
                </ul>
              </nav>
            </div>
            <button
              className={`${
                activeDropdown.active
                  ? 'bg-white text-black'
                  : 'bg-black text-white'
              } px-6 py-3 rounded hover:bg-gray-700`}
            >
              Contact us 📞
            </button>
          </div>
        </div>
      </header>
      {/* background-filter */}
      <div
        className={`${
          activeDropdown.active
            ? 'backdrop-blur-[20px] bg-[rgba(0,0,0,0.17)] pointer-events-auto'
            : 'backdrop-blur-none bg-[rgba(0,0,0,0)] pointer-events-none'
        } fixed top-0 left-0 z-[99] w-full h-full bg-transparent transition-all duration-500 ease-in-out  `}
      />
    </>
  );
};

export default Navbar;
