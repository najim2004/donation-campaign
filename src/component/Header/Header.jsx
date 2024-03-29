import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/Logo.png';

const Header = () => {
    const menu=<>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/donation'}>Donation</NavLink></li>
    <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
    </>
    return (
        <div className='lg:px-[140px] lg:pt-12'>
            <div className="flex justify-between items-center bg-base-100">
                <div className="navbar-start">
                    <Link to={'/'}><img className="w-[150px] lg:w-auto lg:h-[72px]" src={logo} alt="" /></Link>
                </div>
                <div className="hidden items-center lg:flex">
                    <ul className="flex text-lg font-bold gap-[49px] justify-end px-1">
                        {menu}
                    </ul>
                </div>
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu-sm right-0 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;