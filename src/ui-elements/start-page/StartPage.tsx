import React, { ReactElement } from "react"
import { Conference } from "../../domain/conference/conference-interface"
import { ConferenceList } from "../../domain/conference/list/ConferenceList"
import { TextLink } from "../text-link/TextLink"

function StartPage({
  conferences,
}: {
  conferences: Conference[]
}): ReactElement {
  return (
    <article className="container">
      <header>
        <h1 className="display-2 my-5">
          Let’s make tech events more approachable&nbsp;-
          <br />
          <strong>one Buddy at a time</strong>.
        </h1>
      </header>
      <p>
        Conference Buddy provides a platform to find{" "}
        <strong>companions for tech conferences</strong>. You can look for one
        or more person with whom you can attend a conference{" "}
        <strong>together</strong>. Support each other, find a familiar face
        between all these strangers. You will feel more at ease and comfortable
        just knowing you’re not alone. At the same time, you have the
        opportunity to <strong>help others</strong> to feel better!
      </p>
      <h2>How does this work?</h2>
      <p>
        You can find a detailed explanation how to use Conference Buddy here:
        How does this work?
      </p>

      <section>
        <h2 className="my-4">Upcoming Conferences</h2>
        <ConferenceList conferences={conferences} />
        <div className="text-center my-4">
          <TextLink
            to="/conference-list"
            internal={true}
            additionalClasses="fs-5"
          >
            See all conferences
          </TextLink>
        </div>
      </section>
    </article>
  )
}

export { StartPage }
