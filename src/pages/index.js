import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/page/_home.module.scss"
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Auckland.</p>
          <Link className={btn} to="/projects">
            My portfolio Projects
          </Link>
        </div>
        <Img fluid={data.file.childrenImageSharp[0].fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.jpeg" }) {
      childrenImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
