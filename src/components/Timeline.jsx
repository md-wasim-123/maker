import React from 'react'
import img1 from '../images/im1.png'
const Timeline = () => {
  return (
    <div className='w-full h-auto md:h-[1200px] py-10'>
      <div className='max-w-7xl mx-auto w-full grid grid-rows-6 md:grid-cols-9'>

        <div className='col-span-4 flex items-center justify-start flex-col-reverse md:flex-col  w-full px-5 md:px-10'>
          <div className=' w-full text-center'>
            <h1 className='text-[#02243F] text-lg md:text-xl font-bold'>1.ATS-Optimized</h1>
            <p className='text-[#02243F] leading-6'>Our resumes are designed to pass through ATS filters, increasing your chances of landing an interview.</p>
          </div>
          <img className='max-w-xs mx-auto' src={img1} alt="" />
        </div>

        <div className='hidden  relative md:flex items-center justify-center '>
          <div className='col-span-1 bg-gray-700 h-full w-[3px] '></div>
          <div className='absolute w-7 h-7 bg-[#0FA958] rounded-full text-center top-0 '></div>
          <div className='absolute w-7 h-7 bg-[#0FA958]  rounded-full text-center top-60 '></div>
        </div>


        <div className='col-span-4 flex items-center justify-start flex-col  w-full  px-5 md:px-10'>
          <img className='max-w-xs mx-auto' src={img1} alt="" />
          <div className=' w-full text-center'>
            <h1 className='text-[#02243F] text-lg md:text-xl font-bold md:text-right'>2.Guaranteed Interview Calls:</h1>
            <p className='text-[#02243F] font-normal leading-6 md:text-right'>Our resumes are designed to pass through ATS filters, increasing your chances of landing an interview.</p>
          </div>
        </div>


        <div className='col-span-4 flex items-center justify-start flex-col-reverse md:flex-col  w-full px-5 md:px-10'>
          <div className=' w-full text-center'>
            <h1 className='text-[#02243F] text-lg md:text-xl font-bold '>3.Personal Branding: </h1>
            <p className='text-[#02243F] font-normal leading-6'>Our resumes are designed to pass through ATS filters, increasing your chances of landing an interview.</p>
          </div>
          <img className='max-w-xs mx-auto' src={img1} alt="" />
        </div>
        <div className='hidden  relative md:flex items-center justify-center '>
          <div className='col-span-1 bg-gray-700 h-full w-[3px] '></div>
          <div className='absolute w-7 h-7 bg-[#0FA958] rounded-full text-center top-0 '></div>
          <div className='absolute w-7 h-7 bg-[#0FA958] rounded-full text-center top-60 '></div>
        </div>

        <div className='col-span-4 flex items-center justify-start flex-col  w-full px-5 md:px-10'>
          <img className='max-w-xs mx-auto' src={img1} alt="" />
          <div className=' w-full text-center'>
            <h1 className='text-[#02243F] text-lg md:text-xl font-bold md:text-right'>4.Industry Insights:</h1>
            <p className='text-[#02243F] font-normal leading-6 md:text-right'>Our resumes are designed to pass through ATS filters, increasing your chances of landing an interview.</p>
          </div>
        </div>

        <div className='col-span-4 flex items-center justify-start flex-col-reverse md:flex-col  w-full px-5 md:px-10'>
          <div className=' w-full text-center'>
            <h1 className='text-[#02243F] text-lg md:text-xl font-bold '>5.Fast Turnaround:  </h1>
            <p className='text-[#02243F] font-normal leading-6 '>Our resumes are designed to pass through ATS filters, increasing your chances of landing an interview.</p>
          </div>
          <img className='max-w-xs mx-auto' src={img1} alt="" />
        </div>
        <div className='hidden  relative md:flex items-center justify-center '>
          <div className='col-span-1 bg-gray-700 h-full w-[3px] '></div>
          <div className='absolute w-7 h-7 bg-[#0FA958] rounded-full text-center top-0 '></div>
          <div className='absolute w-7 h-7 bg-[#0FA958] rounded-full text-center top-96 '></div>
        </div>

        <div className='col-span-4 flex items-center justify-start flex-col  w-full px-5 md:px-10'>
          <img className='max-w-xs mx-auto' src={img1} alt="" />
          <div className=' w-full text-center'>
            <h1 className='text-[#02243F] text-lg md:text-xl font-bold md:text-right'>6.Unlimited Revisions:</h1>
            <p className='text-[#02243F] font-normal leading-6 md:text-right'>Our resumes are designed to pass through ATS filters, increasing your chances of landing an interview.</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Timeline
