import { NavLink } from "react-router-dom";
import logo from './Logo.svg';
import './index.css';

const Navbar = () => {
    return (
        <div className="Nav">
            <NavLink to='/'>
                <img src={logo} alt='' className='logo' />
            </NavLink>
            <div className="Navlinks">
                <NavLink to='/' className='Navlink'>Home</NavLink>
                <NavLink to='/pages/TrendingJobs' className='Navlink'>Trending Jobs</NavLink>
                <NavLink to='/pages/Search' className='Navlink'>Search</NavLink>
            </div>
        </div>
    );
}
 
export default Navbar;