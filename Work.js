import React from "react"

export default function Work() {
    return (
        <section class="work-experience">
        <div class="content-wrap item-details divider">
          <h2>Work Experience</h2>
          <p>
            See my complete work experience on: 
            <a href="https://www.linkedin.com/in/alberto-obando-zuniga/"
              >LinkedIn</a
            >.
          </p>

          <section class="job-item">
            <div class="job-details">
              <h3>Project Management and QA</h3>
              <p>Tecnológico de Costa Rica</p>
              <p>February 2019-Present</p>
            </div>
            <div class="job-summary">
              <p>
                Managed diferent types of projects so QA was always maintained
                and the best result was achieved
                <a href="https://albertoobando.com">albertoobando.com</a>.
              </p>
            </div>
          </section>

          <section class="job-item">
            <div class="job-details">
              <h3>Assistant for Algorithm Analysis and Sound Synthesis</h3>
              <p>Tecnológico de Costa Rica</p>
              <p>February 2018 - July 2018</p>
            </div>
            <div class="job-summary">
              <p>
                Assisted profesor Rodrigo Nuñez Nuñez while he was teaching
                classes.
              </p>
              <p>Key contributions:</p>
              <ul>
                <li>Grading of Quizes and Projects.</li>
                <li>
                  Answering of doubts any of the students had about their grade.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    )
}