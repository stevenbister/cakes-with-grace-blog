import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import styles from './gallery.module.css'

const ImageGallery = () => {
  const data = useStaticQuery(graphql`
    {
      sanityGallery {
        imageGallery {
          alt
          asset {
            id
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)

  const {imageGallery} = data.sanityGallery

  return (
    <div className={styles.gallery}>
      {imageGallery && imageGallery.map((image, key) => (
        <Img key={key} fluid={image.asset.fluid} alt={image.alt} />
      ))}

    </div>
  )
}

export default ImageGallery
