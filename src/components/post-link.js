import React from "react"
import { Link } from "gatsby"

const PostLink = ( { post } ) => (
	<div>
		<Link to={post.frontmatter.path}>
			<h2>{ post.frontmatter.title }</h2>
		</Link>
		<div dangerouslySetInnerHTML={{ __html: post.html } } />
	</div>
);

export default PostLink
