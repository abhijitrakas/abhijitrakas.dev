/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import Footer from "./footer/footer"

const Layout = ({ children, cssClass, isHome }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
					description
					author
				}
			}
		}
	`);

	const [ stickyVal, setStickyVal ] = useState( 0 );

	/**
	 * Function to handle scroll event.
	 */
	const handleScroll = () => {

		const navbar = document.querySelector( '.navigation-top' );
		let sticky   = '';

		if ( stickyVal ) {
			sticky = stickyVal;
		} else {
			setStickyVal( navbar.offsetTop );
			sticky = navbar.offsetTop;
		}

		if ( window.pageYOffset >= sticky ) {
			navbar.classList.add( 'site-navigation-fixed' );
		} else {
			navbar.classList.remove( 'site-navigation-fixed' );
		}
	};

	/**
	 * React hooks to set and unset window scroll event.
	 */
	useEffect( () => {
		window.addEventListener( 'scroll', handleScroll );
		window.addEventListener( 'resize', () => { setStickyVal( 0 ) } );

		return () => {
			window.removeEventListener( 'scroll', handleScroll );
			window.removeEventListener( 'resize', () => { setStickyVal( 0 ) } );
		};
	} );

	return (
		<div className={cssClass}>
			<div id="page" className="site">
				<Header siteData={data.site.siteMetadata} isHome={isHome} />
				<div className="site-content-contain">
					<div id="content" className="site-content">
						<div className="wrap">
							<main>{children}</main>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	cssClass: PropTypes.string,
	isHome: PropTypes.bool,
}

Layout.defaultProps = {
	cssClass: ``,
	isHome: false,
}

export default Layout
