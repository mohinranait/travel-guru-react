import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import logo from "../../assets/logo.png";
// import './slider.css'
import { IoChevronBackSharp, IoChevronForward, IoSearchOutline } from "react-icons/io5";
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { NavLink } from 'react-router-dom';
import Slider from '../../components/sliders/Slider';
import Header from '../../components/Header/Header';


const Home = () => {
    const slideRef = useRef();
    const [bannerContent, setBannerContent] = useState(null);
    const [banners, setBanners]  = useState([]);

    // const banners = [
    //     {
    //         id : 1, 
    //         image : banner,
    //         title : "Cox'z Bazar",
    //         text : " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta harum quam laudantium, similique ea qui ratione ex dolorem. Esse, nemo."
    //     },
    //     {
    //         id : 2, 
    //         image : "https://wallpapers.com/images/hd/travel-hd-axhrsecphqby11wk.jpg",
    //         title : "Bandar ban",
    //         text : " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta harum quam laudantium, similique ea qui ratione ex dolorem. Esse, nemo."
    //     },
    //     {
    //         id : 3, 
    //         image : "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg",
    //         title : "Chand dip",
    //         text : " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta harum quam laudantium, similique ea qui ratione ex dolorem. Esse, nemo."
    //     },
    //     {
    //         id : 4, 
    //         image : "https://images.pexels.com/photos/18176787/pexels-photo-18176787.jpeg?cs=srgb&dl=pexels-hieu-duong-18176787.jpg&fm=jpg",
    //         title : "Chand dip",
    //         text : " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta harum quam laudantium, similique ea qui ratione ex dolorem. Esse, nemo."
    //     }
    // ]

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/sliders.json");
            const data = await res.json();
            setBannerContent(data.slice(0,1)[0])
            setBanners(data);
        }
        fetchData();
    },[])

    // handle prev
    const handlePrev = () => {
        slideRef.current.swiper.slidePrev();
    }

    // handle Next
    const handleNext = () => {
        slideRef.current.swiper.slideNext();
    }

    const handleSliderContent = (id) => {
        const findBanner = banners?.find(item => item.id === id);
        setBannerContent(findBanner);
    }

    return (
        <div className='relative'>
           <Header></Header>

            <section className=' relative bg-contain bg-center bg-no-repeat' style={{background: `url('${bannerContent?.image}')`,  backgroundRepeat:"no-repeat", backgroundPosition:"center" }}>
                <div className='absolute w-full h-ful top-0 left-0 bottom-0 block bg-black bg-opacity-70'></div>
                <div>
                    <div className="  relative z-10 px-5 mx-auto h-screen flex items-center ">
                        <div className='mt-20'>
                            <div className='grid grid-cols-2'>
                                <div className='px-16'>
                                    <h1 className='text-[95px] font-secondary font-normal mb-1 text-white'>{bannerContent?.title}</h1>
                                    <p className='text-white font-base font-normal'>{bannerContent?.text}</p>
                                </div>
                            
                                <div className=''>
                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={10}
                                        pagination={false}
                                        navigation={false}
                                        modules={[Pagination,Navigation]}
                                        className="mySwiper"
                                        ref={slideRef}
                                    >
                                        {
                                            banners?.map(banner => (
                                                <SwiperSlide key={banner.id}>
                                                   <Slider banner={banner} handleSliderContent={handleSliderContent}
                                                    bannerContent={bannerContent}
                                                   />
                                                </SwiperSlide>
                                            ) )
                                        }
                                        
                                    </Swiper>
                                    <div className='mt-10'>
                                        <div className='flex items-center justify-start gap-3'>
                                            <button 
                                            onClick={handlePrev} 
                                            className='
                                            px-3 py-1 
                                            bg-white 
                                            text-gray-700
                                            w-10
                                            h-10 
                                            rounded-full
                                            '><IoChevronBackSharp></IoChevronBackSharp></button>
                                            <button 
                                            onClick={handleNext} 
                                            className='
                                            px-3 py-1 
                                            bg-white 
                                            text-gray-700
                                            w-10
                                            h-10 
                                            rounded-full
                                            '><IoChevronForward></IoChevronForward></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;