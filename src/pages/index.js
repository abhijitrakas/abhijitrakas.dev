import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"

export const pageQuery = graphql`
	query {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					html
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						path
						title
						author
					}
				}
			}
		}
	}
`

const IndexPage = ( { data: { allMarkdownRemark: { edges }, }, } ) => {

	const Posts = edges
		.filter( edge => !! edge.node.frontmatter.date ) // You can filter your posts based on some criteria
		.map( edge => <PostLink key={edge.node.id} post={edge.node} /> );

	return (
		<Layout cssClass="home blog has-header-image" isHome={true}>
			<SEO title="Home" />
			<div>{Posts}</div>
		</Layout>
	)
};

export default IndexPage
