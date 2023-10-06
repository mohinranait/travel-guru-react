import React, { useState } from 'react';
import Header from '../../components/Header/Header';

const Login = () => {
    const [isAnim, setIsAnim] = useState(true);

    const handleLogin = () => {
        setIsAnim(true)
    }
    const handleRegister = () => {
        setIsAnim(false)
    }
    return (
        <section className='bg-no-repeat' style={{backgroundRepeat:"no-repeat", backgroundSize:"cover" ,background: `url('https://www.shrubberydental.co.uk/wp-content/uploads/2014/09/video-bg.jpg')`}}>
        <Header></Header>
         <div className=' min-h-screen py-28' >
            <div className="container flex items-start">
                <div className="w-[450px] overflow-hidden  mx-auto rounded-lg">
                    <div className='grid grid-cols-2 px-10 gap-3 pt-10 pb-4 bg-white '>
                        <button onClick={handleLogin} className={`py-3 w-full rounded-md  font-normal ${isAnim ? 'bg-pink-500 text-white' : 'shadow' } `}>Login</button>
                        <button onClick={handleRegister} className={`py-3 w-full rounded-md  font-normal ${!isAnim ? 'bg-pink-500 text-white' :'shadow'}`}>Register</button>
                    </div>
                    <div className={`grid grid-cols-2  items-start w-[900px] transition-all duration-300  ${isAnim ? '':'-translate-x-2/4'} `}>
                      
                        <div className='w-[450px] px-10 pb-10 rounded-b-lg bg-white '>
                            <div className='text-3xl pb-5 font-semibold text-gray-600'>Login Form</div>
                            <div>
                                <form action="">
                                    <div className='mb-4'>
                                        <label htmlFor="" className='mb-1 block font-medium text-gray-600'>Full name</label>
                                        <input type="text" className='px-3 w-full py-3 bg-gray-100 rounded-md outline-none' />
                                    </div>
                                    <div className='mb-5'>
                                        <label htmlFor="" className='mb-1 block font-medium text-gray-600'>Email</label>
                                        <input type="text" className='px-3 w-full py-3 bg-gray-100 rounded-md outline-none' />
                                    </div>
                                    <div className='mb-4'>
                                    <button className='px-5 py-3 rounded-md bg-yellow-500 text-black font-medium w-full'>Sign In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    
                        <div className='w-[450px] px-10 pb-10 rounded-b-lg bg-white '>
                            <div className='text-3xl pb-5 font-semibold text-gray-600'>Register Form</div>
                            <div>
                                <form action="">
                                    <div className='mb-4'>
                                        <label htmlFor="" className='mb-1 inline-block font-medium text-gray-600'>Full name</label>
                                        <input type="text" className='px-3 w-full py-3 bg-gray-100 rounded-md outline-none' />
                                    </div>
                                    <div className='mb-5'>
                                        <label htmlFor="" className='mb-1 inline-block font-medium text-gray-600'>Email</label>
                                        <input type="text" className='px-3 w-full py-3 bg-gray-100 rounded-md outline-none' />
                                    </div>
                                    <div className='mb-5'>
                                        <label htmlFor="" className='mb-1 inline-block font-medium text-gray-600'>Password</label>
                                        <input type="text" className='px-3 w-full py-3 bg-gray-100 rounded-md outline-none' />
                                    </div>
                                    <div className='mb-4'>
                                        <button className='px-5 py-3 rounded-md bg-yellow-500 text-black font-medium w-full'>Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </section>
       
    );
};

export default Login;