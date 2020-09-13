import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} />
    <main className={styles.content}>{children}</main>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          <p>&copy; {new Date().getFullYear()}, Cakes with Grace</p>
          <p>Made with ❤️ by <a href='https://stevenbister.com'>Steven Bister</a></p>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
