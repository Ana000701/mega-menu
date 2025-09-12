'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { useState, useEffect } from 'react';

import { ChevronDown, ArrowRight } from 'lucide-react';

export const SaaSDropdown = () => {
  return (
    <div className='absolute top-20 left-0 w-full bg-black text-white shadow-md rounded-bl-lg rounded-br-lg p-10'>
      <div className='grid grid-cols-3 gap-10 mt-4'>
        <div>
          <p className='py-5 text-gray-400'>
            Explore Asia’s vibrant cultures, from Japan’s futuristic cities to
            Bali’s serene beaches. Discover ancient wonders, mouthwatering
            cuisines, and breathtaking landscapes that make every journey
            unforgettable.
          </p>
          <Link href='#' className='flex gap-3 items-center text-gray-400'>
            Learn More <ArrowRight size={20} />
          </Link>
        </div>
        <div>
          <p className='py-5 text-gray-400'>
            Experience Africa’s untamed beauty, from thrilling safaris to
            stunning coastlines. Dive into its rich cultures, vibrant cities,
            and awe-inspiring natural wonders like Victoria Falls.
          </p>
          <Link href='#' className='flex gap-3 items-center text-gray-400'>
            Learn More <ArrowRight size={20} />
          </Link>
        </div>
        <div>
          <p className='py-5 text-gray-400'>
            Journey through Europe’s charming cities and historic landmarks.
            From Paris’s romance to Rome’s ancient ruins, every destination is a
            story waiting to be discovered.
          </p>
          <Link href='#' className='flex gap-3 items-center text-gray-400'>
            Learn More <ArrowRight size={20} />
          </Link>
        </div>
      </div>
      <hr className='my-10 border-none outline-none h-0.5 rounded-2xl bg-gray-400' />
      <div className='flex justify-between items-center'>
        <p className='text-lg w-1/2 text-gray-400'>
          Still confused about where to go? See the most popular destinations
          our travelers love to visit.
        </p>
        <Link
          href='/destination'
          className='text-black flex items-center gap-3 bg-white px-4 py-2 rounded'
        >
          Explore <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export const TravelPlannerDropdown = () => {
  return (
    <div className='absolute top-20 left-0 w-full bg-black text-white shadow-md rounded-bl-lg rounded-br-lg p-10'>
      <div className='grid grid-cols-3 gap-10 mt-4'>
        <div className='bg-honeymoon h-[400px] w-full rounded-xl bg-cover bg-center relative'>
          <p className='p-5 text-white bg-black/90 w-full absolute bottom-0'>
            Explore Asia’s vibrant cultures, from Japan’s futuristic cities to
            Bali’s serene beaches. Discover ancient wonders, mouthwatering
            cuisines, and breathtaking landscapes that make every journey
            unforgettable.
          </p>
        </div>
        <div className='bg-weekend h-[400px] w-full rounded-xl bg-cover bg-center relative'>
          <p className='p-5 text-white bg-black/90 w-full absolute bottom-0'>
            Experience Africa’s untamed beauty, from thrilling safaris to
            stunning coastlines. Dive into its rich cultures, vibrant cities,
            and awe-inspiring natural wonders like Victoria Falls.
          </p>
        </div>
        <div className='bg-family h-[400px] w-full rounded-xl bg-cover bg-center relative'>
          <p className='p-5 text-white bg-black/90 w-full absolute bottom-0'>
            Journey through Europe’s charming cities and historic landmarks.
            From Paris’s romance to Rome’s ancient ruins, every destination is a
            story waiting to be discovered.
          </p>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const currentRoute = usePathname();

  const [activeDropdown, setActiveDropdown] = useState({
    active: true,
    dropdownName: '',
  });

  useEffect(() => {
    setActiveDropdown({ active: false, dropdownName: '' });
  }, [currentRoute]);

  return (
    <>
      <header className='fixed top-[1.4rem] md:top-[2.1rem] left-1/2 -translate-x-1/2 w-[90%] max-w-full min-h-24 z-[100]'>
        <div
          className={`${
            activeDropdown.active ? 'min-h-[590px]' : 'min-h-24'
          } w-full rounded-lg text-black bg-[#ffffffd9] backdrop-blur-[5px] transition-[min-height] duration-500 ease-in-out`}
          onMouseLeave={() =>
            setActiveDropdown({ active: false, dropdownName: '' })
          }
        >
          <div className='relative flex items-center justify-between py-4 px-12'>
            <div className='flex items-center justify-between gap-16'>
              {/* Logo */}
              <Link href='/'>
                <span className='block bg-[url(/logo.svg)] bg-no-repeat w-[19.5rem] h-[3.7rem]' />
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
                    <p className='block h-fit text-2xl leading-[1.05] tracking-[0.03em] relative z-[2] cursor-pointer'>
                      雲端服務
                    </p>

                    {/* Dropdown Menu */}
                    {activeDropdown.active &&
                      activeDropdown.dropdownName === 'saas' && (
                        <SaaSDropdown />
                      )}
                  </li>
                  <li
                    onMouseEnter={() =>
                      setActiveDropdown({
                        active: true,
                        dropdownName: 'planner',
                      })
                    }
                  >
                    <p className='flex gap-1 items-center cursor-pointer'>
                      Trip Planner
                      <ChevronDown size={20} />
                    </p>

                    {/* Dropdown menu */}
                    {activeDropdown.active &&
                      activeDropdown.dropdownName === 'planner' && (
                        <TravelPlannerDropdown />
                      )}
                  </li>
                  <li
                    onMouseEnter={() =>
                      setActiveDropdown({ active: false, dropdownName: '' })
                    }
                  >
                    <p className='cursor-pointer'>Deals</p>
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
