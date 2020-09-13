import {Link} from 'gatsby'
import React from 'react'
import Logo from '../images/logo.inline.svg'

import styles from './header.module.css'

const Header = ({siteTitle}) => (
  <header className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>
          <Logo className={styles.logo} />
          <span className={styles.srOnly}>{siteTitle}</span>
        </Link>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to='/archive/'>Archive</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
