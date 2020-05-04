import React from 'react';

export default () => {
	return (
		<footer id="colophon" className="site-footer" role="contentinfo">
			<div className="wrap">
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</div>
		</footer>
	);
};
