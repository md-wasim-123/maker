import React from 'react'

const Work = () => {
    return (
        <div className='w-full h-auto'>
            <div className="md:container md:mx-auto">
            <h1 className='text-3xl md:text-5xl text-center p-10 font-bold text-[#132247]'>Here's How It Works</h1>
            <div className='w-bg md:bg-[#132247] w-full'>
                <ul className='list-decimal text-lg md:text-2xl md:text-white px-10 md:px-28 py-5'>
                    <li className='p-3'>
                        <p className='text-justify'><span className='font-bold'>Submit Your Details:</span> Provide your Name, WhatsApp Number, and upload your Current Resume in the fields below.</p>
                    </li>
                    <li className='p-3'>
                        <p className='text-justify'> <span className='font-bold'>Group Addition:</span> Within 24 hours of submission, you will be added to a WhatsApp group with our Resume Writer.</p>

                    </li>

                    <li className='p-3'>
                        <p className='text-justify'><span className='font-bold'>Information Collection:</span>  Our Resume Writer team will share a Google Doc for you to input additional details.</p>
                    </li>
                    <li className='p-3'>
                        <p className='text-justify'><span className='font-bold'>Receive Your New Resume:</span>  After updating the provided Doc, our team will share your revamped resume within 48 hours.</p>
                    </li>
                    <li className='p-3'>
                        <p className='text-justify'>
                            <span className='font-bold'> Video Testimonial: </span>  If you're pleased with the result, we kindly request a video testimonial. Once shared, you'll get your revamped resume, no strings attached!</p>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Work
