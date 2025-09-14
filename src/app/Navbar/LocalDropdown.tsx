import Image from 'next/image';
import Link from 'next/link';

export default function LocalDropdown() {
  return (
    <div className='absolute top-24 left-0 w-full pt-30 px-16 transition-opacity duration-200  ease-in-out'>
      <div className='flex justify-between items-start w-full'>
        <div className='flex w-full'>
          <div className='pr-24'>
            <p className='w-fit text-4xl font-semibold leading-[1.65] tracking-[0.03em] relative mb-[1.2rem]'>
              本地部屬
            </p>
            <p className='text-[1.2rem] text-primary leading-[1]'>Local</p>
          </div>
          <ul className='relative grid grid-flow-col grid-rows-4 gap-x-[3.4rem]'>
            <li>
              <Link
                href='/saas'
                className='block w-[24.4rem] border-b border-b-gray text-2xl py-[1.8rem] relative overflow-hidden'
              >
                <span className='block transition-transform duration-300 delay-[0.06s] ease-in-out hover:translate-x-16 before:content-[""] before:absolute before:top-1/2 before:-left-12 before:-translate-1/2 before:w-6 before:h-6 before:bg-[url(/arrow.svg)] before:bg-center before:bg-no-repeat before:bg-contain after:content-[""] after:absolute after:top-1/2 after:right-4 after:-translate-y-1/2 after:w-3 after:h-3 after:bg-primary after:rounded-full'>
                  <span>測試1</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                href='/saas'
                className='block w-[24.4rem] border-b border-b-gray text-2xl py-[1.8rem] relative overflow-hidden'
              >
                <span className='block transition-transform duration-300 delay-[0.06s] ease-in-out hover:translate-x-16 before:content-[""] before:absolute before:top-1/2 before:-left-12 before:-translate-1/2 before:w-6 before:h-6 before:bg-[url(/arrow.svg)] before:bg-center before:bg-no-repeat before:bg-contain after:content-[""] after:absolute after:top-1/2 after:right-4 after:-translate-y-1/2 after:w-3 after:h-3 after:bg-primary after:rounded-full'>
                  <span>測試2</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                href='/saas'
                className='block w-[24.4rem] border-b border-b-gray text-2xl py-[1.8rem] relative overflow-hidden'
              >
                <span className='block transition-transform duration-300 delay-[0.06s] ease-in-out hover:translate-x-16 before:content-[""] before:absolute before:top-1/2 before:-left-12 before:-translate-1/2 before:w-6 before:h-6 before:bg-[url(/arrow.svg)] before:bg-center before:bg-no-repeat before:bg-contain after:content-[""] after:absolute after:top-1/2 after:right-4 after:-translate-y-1/2 after:w-3 after:h-3 after:bg-primary after:rounded-full'>
                  <span>測試3</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                href='/saas'
                className='block w-[24.4rem] border-b border-b-gray text-2xl py-[1.8rem] relative overflow-hidden'
              >
                <span className='block transition-transform duration-300 delay-[0.06s] ease-in-out hover:translate-x-16 before:content-[""] before:absolute before:top-1/2 before:-left-12 before:-translate-1/2 before:w-6 before:h-6 before:bg-[url(/arrow.svg)] before:bg-center before:bg-no-repeat before:bg-contain after:content-[""] after:absolute after:top-1/2 after:right-4 after:-translate-y-1/2 after:w-3 after:h-3 after:bg-primary after:rounded-full'>
                  <span>測試4</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                href='/saas'
                className='block w-[24.4rem] border-b border-b-gray text-2xl py-[1.8rem] relative overflow-hidden'
              >
                <span className='block transition-transform duration-300 delay-[0.06s] ease-in-out hover:translate-x-16 before:content-[""] before:absolute before:top-1/2 before:-left-12 before:-translate-1/2 before:w-6 before:h-6 before:bg-[url(/arrow.svg)] before:bg-center before:bg-no-repeat before:bg-contain after:content-[""] after:absolute after:top-1/2 after:right-4 after:-translate-y-1/2 after:w-3 after:h-3 after:bg-primary after:rounded-full'>
                  <span>測試5</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link href='/saas' className='group/saas'>
            <div className='w-full h-60 rounded-2xl mb-[1.2rem] relative overflow-hidden'>
              <Image
                src='/image02.png'
                alt='測試'
                width={253}
                height={141}
                className='block w-full h-full object-cover group-hover/saas:scale-[1.1] transition-all duration-300 ease-in-out'
              />
            </div>
            <div className='text-2xl leading-[1.65] tracking-[0.03em] relative overflow-hidden'>
              <span className='block transition-transform duration-300 delay-[0.06s] ease-in-out group-hover/saas:translate-x-16 before:content-[""] before:absolute before:top-1/2 before:-left-12 before:-translate-1/2 before:w-6 before:h-6 before:bg-[url(/arrow.svg)] before:bg-center before:bg-no-repeat before:bg-contain after:content-[""] after:absolute after:top-1/2 after:right-4 after:-translate-y-1/2 after:w-3 after:h-3 after:bg-primary after:rounded-full'>
                <span>測試1</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
