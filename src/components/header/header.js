import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import HeaderImage from './header-banner';

const Header = ({ siteData, isHome }) => {

	const [ activeMobileMenu, setActiveMobileMenu ] = useState( '' );

	const handleMoShowMenuClick = () => {
		if ( activeMobileMenu ) {
			setActiveMobileMenu( '' );
		} else {
			setActiveMobileMenu( 'active' );
		}
	};

	return (
		<div>
			<header id="masthead" className="site-header" role="banner">
				<HeaderImage siteData={siteData} isHome={isHome} />
				<div className="navigation-top">
					<div className="wrap">
						<nav id="site-navigation" className={`main-navigation ${ activeMobileMenu }`} role="navigation" aria-label="Top Menu">
							<button className="menu-toggle" onClick={handleMoShowMenuClick} aria-controls="top-menu" aria-expanded="false">
								<span className="line"></span>
								<span className="line"></span>
								<span className="line"></span>
								<span className="menu-text">MENU</span>
							</button>
							<div className="menu-top-navigation-container">
								<ul id="top-menu" className="menu">
									<li className="menu-item menu-item-type-post_type menu-item-object-page"><Link to="/">Home</Link></li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</header>
			{/* <div className="single-featured-image-header">

		</div> */}
		</div>
	);
};

Header.propTypes = {
	siteData: PropTypes.object.isRequired,
	isHome: PropTypes.bool.isRequired,
}

export default Header
