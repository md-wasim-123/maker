import React from 'react'

const Details = () => {
    return (
        <div className='w-full h-auto bg-white  '>
            <div className="container mx-auto flex-wrap md:flex-row md:flex justify-center md:justify-between   px-2 md:px-8 ">

                <div className='flex flex-col w-full md:w-2/3  '>
                    <div className='flex items-center justify-around md:flex-col flex-col-reverse '>
                        <h4 className='text-3xl text-center md:text-start md:text-[2.5rem] font-bold leading-10 p-5'>Unlock Interviews with a Standout Resume</h4>
                        <div className='h-1 w-28 bg-[#09324F] mx-auto rounded-sm m-3'></div>
                    </div>

                    <div className='p-2 md:p-8 '>
                        <h1 className='text-2xl text-center md:text-start md:text-[2.1rem] font-bold'>Why a <span className='text-[#0FA958]'>Great Resume Matters:</span></h1>

                        <div className='flex place-items-stretch md:px-3 md:gap-2 p-3 py-4  '>
                            {/* detaile information text */}
                            <ul class="list-disc text-center md:text-start">
                                <li className='py-4'>
                                    <p className='text-[#09324F] text-lg  md:text-[1.333rem] leading-6 font-[400] tracking-wide'>
                                        <span className='font-bold'> Makes a Strong First Impression:</span>  Captures attention and showcases your potential.</p>
                                </li>
                                <li className='py-4'>
                                    <p className='text-[#09324F] text-lg  md:text-[1.333rem] leading-6 font-[400] tracking-wide'>
                                        <span className='font-bold'> ATS-Friendly:</span>Designed to get past automated filters and into human hands.
                                    </p>
                                </li>
                                <li className='py-4'>
                                    <p className='text-[#09324F] text-lg  md:text-[1.333rem] leading-6 font-[400] tracking-wide'>
                                        <span className='font-bold'>Highlights Your Skills:</span>Clearly presents your experiences and abilities.
                                    </p></li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-xl text-center md:text-start md:text-[2rem] font-bold px-9 py-5 tracking-wide '>Our <span className='text-[#0FA958]'>Canada-Specific</span>  Resume Writing <span className='text-[#0FA958]'>Service</span> </div>

                </div >
            

                <div className='w-full md:w-1/3 bg-[#213360] h-max rounded-lg md:rounded-none md:rounded-br-lg md:rounded-bl-lg'>
                    <h2 className='text-[1.8rem] font-bold text-white px-8 py-2 '>Fill In Your Details </h2>
                    <form>
                        <div class="mb-4 mx-5 p-4">
                            <label for="name" class="block mb-2 px-2 text-lg font-bold text-gray-900 dark:text-white">NAME</label>
                            <input type="text" id="email" class=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div class="mb-4 mx-5 p-4">
                            <label for="email" class="block mb-2 px-2 text-lg font-bold text-gray-900 dark:text-white">EMAIL</label>
                            <input type="email" id="email" class=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div class="mb-4 mx-5 p-4">
                            <label for="name" class="block mb-2 px-2 text-lg font-bold text-gray-900 dark:text-white">WHATSAPP NUMBER</label>
                            <input type="email" id="email" class=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div className='flex items-center justify-center flex-col'>
                            <button type="submit" class="text-white shadow-xl bg-[#0FA958] w-48 font-bold rounded-lg text-base px-7 py-2 text-center ">CLAIM NOW</button>
                            <h5 className='text-[#D6EEFF] mb-8 py-3 font-semibold text-xl'>*Only 39 slots left out of 100</h5>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    )
}

export default Details
