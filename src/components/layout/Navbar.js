import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const Navbar = ({ icon, title, homeIcon, homeTitle, aboutIcon, aboutTitle}) => {
    //bg-primary

        return (
            <nav className="navbar" > 
               <h1>
                  <i className={icon} /> {title}
                </h1> 
                <ul>
                    <li>
                        <Link to={'/'}>
                        <i className={homeIcon}/>
                            {homeTitle}
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'}>
                        <i className={aboutIcon}/>  
                        {aboutTitle}  
                        </Link>
                    </li>
                </ul>
            </nav>
        );
}
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github',
    homeTitle: 'Home',
    homeIcon: 'fas fa-home',
    aboutTitle: 'About',
    aboutIcon: 'fas fa-info'
 };
Navbar.propTypes = {
     title: PropTypes.string.isRequired,
     icon: PropTypes.string.isRequired,
     homeTitle: PropTypes.string.isRequired,
     homeIcon: PropTypes.string.isRequired,
     aboutTitle: PropTypes.string.isRequired,
     aboutIcon: PropTypes.string.isRequired
 };


export default Navbar
