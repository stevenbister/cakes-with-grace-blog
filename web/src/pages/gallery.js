import React from 'react'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1} from '../components/typography.module.css'
import ImageGallery from '../components/image-gallery'

const GalleryPage = () => {
  return (
    <Layout>
      <SEO title='Gallery' />
      <Container>
        <h1 className={responsiveTitle1}>Gallery</h1>
      </Container>

      <ImageGallery />
    </Layout>
  )
}

export default GalleryPage
