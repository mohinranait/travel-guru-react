import PropTypes from "prop-types"

const Slider = ({banner,handleSliderContent,bannerContent}) => {
    const {id,image,title,} = banner;
    return (
        <>
            <div onClick={() => handleSliderContent(id)} className={`h-[300px] relative rounded-2xl
            overflow-hidden  cursor-pointer border-[3px] ${bannerContent.id == id ? 'border-yellow-500' : 'border-transparent' }`} >
                <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent bg-opacity-60'></span>
                <div>
                    <img src={image} className='h-[300px] object-cover rounded-md' alt="" />
                </div>
                <p className='absolute bottom-0 left-0 text-2xl font-bold text-white pl-3 mb-5'>{title}</p>
            </div>  
        </>
    );
};

Slider.propTypes = {
    banner: PropTypes.object.isRequired,
    handleSliderContent: PropTypes.func.isRequired,
    bannerContent: PropTypes.object.isRequired
}

export default Slider;