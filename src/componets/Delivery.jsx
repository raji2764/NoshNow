/* eslint-disable no-unused-vars */
import React,{useState} from 'react'

function Delivery(){
    return(
        <>
        <div className='w-full bg-white py-16 px-4'>
            <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
            <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convinience on-demand</h1>
                <p>
                The speed and convenience that food delivery apps offer is simply the standard for consumers. Consumers want convenience in all aspects of their lives, including food, and restaurants can do that by signing up with third-party apps, or creating their own takeout and delivery channel.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
            </div>
        </div>
        </>
    )
}

export default Delivery