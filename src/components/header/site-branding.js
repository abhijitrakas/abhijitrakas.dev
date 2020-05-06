import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";


const SiteBranding = ( { siteTitle, siteDescription } ) => {

	if ( ! siteTitle && ! siteDescription ) {
		return;
	}

	return (
		<div className="site-branding">
			<div className="wrap">
				<div className="site-branding-text">
					{ siteTitle && <Link to="/">
						<h1 className="site-title">
							{ siteTitle }
						</h1>
					</Link> }
					{ siteDescription && <p className="site-description">
						{ siteDescription }
					</p> }
				</div>
			</div>
		</div>
	);
};

SiteBranding.propTypes = {
	siteTitle: PropTypes.string,
	siteDescription: PropTypes.string,
}

SiteBranding.defaultProps = {
	siteTitle: ``,
	siteDescription: ``,
}

export default SiteBranding;
