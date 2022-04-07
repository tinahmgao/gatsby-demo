import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { portfolio, projects } from "../../styles/page/_projects.module.scss"

export default function Projects({ data }) {
  const allProjects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={projects}>
          {allProjects.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

// export page query

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          stack
          slug
        }
        id
      }
    }
  }
`
