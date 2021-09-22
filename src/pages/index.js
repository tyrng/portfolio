import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"

const IndexPage = ({ data }) => (
  <Layout>
    <Hero content={data.hero.edges[0].node} />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    hero: allMdx  {
      edges {
        node {
          frontmatter {
            title
          }
          body
        }
      }
    }
  }
`