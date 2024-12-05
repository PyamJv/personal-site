import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Payaam Javid</h2>
        <p>
          <a href="mailto:jpayaam@gmail.com">jpayaam@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I am Payaam. I am a{' '}
        <a href="https://www.yorku.ca">York University</a> graduate, and the co-founder and CEO of{' '}
        <a href="TBD">Perpetual Hill Studios</a>. Previously, I
        was Student head of game design at <a href="https://create.torontofilmschool.ca">Toronto Film School</a>,
        Game Designer for several projects including the TFS Capstone <a href="https://arthena.com">Arthena</a>, and
        Freelancing and contracting as a 3D Modeler.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Payaam Javid <Link to="/">https://pyamjv.github.io/personal-site/</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
