import React from "react";

export default function Projects() {
  return (
    <section class="projects">
      <div class="content-wrap divider">
        <h2>Featured Projects</h2>
        <p>
          These are my projects in development below. More information can be
          found at <a href="https://albertoobando.com">albertoobando.com</a>.
        </p>

        <section class="project-item">
          <img
            src="images/TourisTICOCar.jpg"
            alt="TourisTICO car in Turrialba"
          />
          <h3>TourisTICO</h3>
          <p>
            TourisTICO is a Blog tipe web page about discovering Costa Rica with
            my dog, my truck, and my friends.
          </p>
          <a
            class="btn"
            href="https://www.instagram.com/touristico1/"
            target="_blank"
          >
            Follow me
          </a>
        </section>

        <section class="project-item">
          <img src="images/506LabStore.jpg" alt="506 Lab Store Logo" />
          <h3>506 Lab Store</h3>
          <p>
            506 Lab Store is a store that specializes in selling and repairing
            electronic devices. They have a wide range of products and services
            available. To see more please visit the site.
          </p>
          <a
            class="btn"
            href="https://www.facebook.com/506labstore-360275531273529/"
            target="_blank"
          >
            Consult now!!
          </a>
        </section>

        <section class="project-item">
          <img src="images/spookyGlitterLogo.jpg" alt="Spooky Glitter Logo" />
          <h3>Spooky Glitter</h3>
          <p>
            Spooky Glitter is a store website where the users can see all the
            available a soon to come items. They are also able to buy directly
            from the website.
          </p>
          <a
            class="btn"
            href="https://www.instagram.com/spooky_glitter/"
            target="_blank"
          >
            See our Instagram
          </a>
        </section>
      </div>
    </section>
  );
}