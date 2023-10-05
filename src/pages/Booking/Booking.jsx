import React from 'react';
import Header from '../../components/Header/Header';
import bgImg from "../../assets/banner-1.png"

const Booking = () => {
    return (
        <>
             <div className='relative'>
           <Header></Header>

            <section className=' relative bg-contain bg-center bg-no-repeat' style={{background: `url('${bgImg}')`,  backgroundRepeat:"no-repeat", backgroundPosition:"center" }}>
                <div className='absolute w-full h-ful top-0 left-0 bottom-0 block bg-black bg-opacity-70'></div>
                <div>
                    <div className=" container relative z-10 px-5 mx-auto h-screen flex items-center ">
                        <div className='mt-20'>
                            <div className='grid grid-cols-2 gap-16'>
                                <div>
                                    <h1 className='text-[95px] font-secondary font-normal text-white' >Cox's bazar</h1>
                                    <p className='text-white font-base font-normal'>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                                </div>
                                <div>
                                    <div className='bg-white rounded-lg px-10 py-10'>
                                        <form action="">
                                            <div className='mb-3'>
                                                <label htmlFor="" className='text-[#818181] font-medium'>Origin</label>
                                                <input type="text" className='py-4 outline-none font-semibold rounded-md mt-1 px-3 bg-[#F2F2F2] w-full' value={"Dhaka"} />
                                            </div>
                                            <div className='mb-3'>
                                                <label htmlFor="" className='text-[#818181] font-medium'>Destination</label>
                                                <input type="text" className='py-4 outline-none font-semibold rounded-md mt-1 px-3 bg-[#F2F2F2] w-full' value={"Cox’s Bazar"} />
                                            </div>
                                            <div className='grid grid-cols-2 gap-5 mb-5'>
                                                <div className=''>
                                                    <label htmlFor="start" className='text-[#818181] font-medium'>Form</label>
                                                    <input type="month" id="start" name="start" min="2022-10" value="2023-10" className='py-4 outline-none font-semibold rounded-md mt-1 px-3 bg-[#F2F2F2] w-full' />
                                                </div>
                                                <div className=''>
                                                    <label htmlFor="start" className='text-[#818181] font-medium'>To</label>
                                                    <input type="month" id="start" name="start" min="2018-03" value="2023-11" className='py-4 outline-none font-semibold rounded-md mt-1 px-3 bg-[#F2F2F2] w-full' />
                                                </div>
                                               
                                            </div>

                                            <div className='mb-3'>
                                               <button className='w-full py-3 rounded-lg bg-[#F9A51A] text-black font-medium'>Start Booking</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default Booking;