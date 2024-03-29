
import bgImage from '../../assets/bgImg.png';
const Banner = () => {
    return (
        <div className="w-full h-[600px] mb-6 lg:mb-[100px] relative flex space-y-10 flex-col justify-center items-center">

            <div className='inset-0 absolute opacity-10 z-0' style={{ backgroundImage: `url(${bgImage})` }}>
            </div>
            <h3 className='text-[48px] font-bold z-0'>I Grow By Helping People In Need</h3>
            <div className="w-[470px] flex h-[50px] rounded-lg bg-white border-[1px] border-[#DEDEDE] z-0 ">
                <input className='flex-grow rounded-l-lg p-4 text-[rgba(11,11,11,0.40)] h-full ' placeholder='Search here....' type="text" />
                <button className='btn btn-sm w-[110px] border-none h-full bg-[#FF444A] font-semibold text-white rounded-r-lg rounded-l-none'>Search</button>
            </div>
        </div>
    );
};

export default Banner;