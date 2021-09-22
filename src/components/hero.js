import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as Components from "./sharedStyles"

const Hero = ({ content }) => {
  const { body } = content
  return (
    <MDXProvider components={Components}>
      <MDXRenderer>{body}</MDXRenderer>
    </MDXProvider>
  )
}

export default Hero