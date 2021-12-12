import React, { ReactElement } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function Header(): ReactElement {
  return (
    <header className="mb-3">
      <nav className="bg-confbuddy-green px-sm-4 py-2 px-2 d-flex justify-content-between">
        <div className="d-none d-sm-block d-flex align-items-center">
          <Link to="/" title="Startpage">
            <StaticImage
              src="../../images/LogoConferenceBuddy_head_small.png"
              alt="Logo"
            />
          </Link>
        </div>
      </nav>
    </header>
  )
}
export { Header }
