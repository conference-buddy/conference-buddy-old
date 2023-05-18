import React, { ReactElement, ReactNode } from "react"
import "../../assets/scss/main.scss"
import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"

export default function PageLayout({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return (
    <>
      <Header />
      <div className="min-vh-100 d-flex flex-column">
        <main className="flex-grow-1 py-3 py-md-4">{children}</main>
      </div>
      <Footer />
    </>
  )
}
