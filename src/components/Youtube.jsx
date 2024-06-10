import React from 'react'
import you from '../images/you.svg'
import link from '../images/link.svg'

const Youtube = () => {
    return (
        <div className='w-full h-auto bg-slate-600'>
            <div class="aspect-w-10 aspect-h-4">
             <iframe width="560" height="315" src="https://www.youtube.com/embed/7apj4sVvbro?si=v_zAu9Dfpuu038Px" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className='f-bg py-5 flex items-center justify-center gap-5 md:gap-10'>
                <div className=' text-xl md:text-3xl font-bold text-white '>Connect with us !</div>
                <div className='  flex items-center justify-center'>
                    <img className='w-7 md:w-20' src={you} alt="hrllo" />
                    <p className=' text-2xl md:text-5xl font-semibold'>YouTube</p>
                </div>
                <div className=' text-2xl'>
                <img className='w-8 md:w-16' src={link} alt="hrllo" />
                </div>
            </div>
            <div className='bg-[#02243F] text-white'>
                <p className='text-center'>Copyright © 2023 Top Talent Bridge | All Rights Reserved </p>
            </div>
        </div>
    )
}

export default Youtube
