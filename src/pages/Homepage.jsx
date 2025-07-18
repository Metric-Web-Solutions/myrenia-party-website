import React from 'react';
import '../styling/Homepage.css';
import logo from '../assets/myrenia-party.png';
import discord from '../assets/discord-account.png';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function Homepage() {
  return <>
      <Helmet>
        <title>The Myrenia Party For Social Justice</title>
        <link rel="icon" type="image/x-icon" href="/myrenia-party.png" />
        <meta name="description" content="The official website for the Myrenia Social Justice Party" />
        <meta name="author" content="Rico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="wrapper">
        <header className="fold">
          <div className="fold-logo-name">
            <img className="fold-logo" src={logo} alt="Myrenia Social Justice party logo." />
            <h1 className="fold-header-name">Justice. Equality. Myrenia.</h1>
          </div>
          <div className="hero-section">
            <h2 className="hero-cta">Discover our vision.</h2>
            <p className="hero-content">The Myrenia Party For Social Justice aims to alleviate the worst off in income, education, gender, ethnicity, age, health and sexuality in the context of social inequalites in Myrenia via technology, social policy, development and greater wealth equality.</p>
          </div>
        </header>

        <section className="achievements">
          <div className="achievements-info">
            <div className="achievements-list">
              <h5>Our Achievements</h5>
              <p>• Came to Myrenia's rescue in a time of war by manafacturing and selling nuclear weapons.</p>
              <p>• Represented the concern for social justice in politics when no other party would.</p>
              <p>• Supporter of one of the fastest growing tech companies in Myrenia, Interstellar Corp.</p>
            </div>
          </div>
        </section>

        <section className="leader">
          <div className="leader-info">
            <div className="leader-description">
              <h5>Our Leader</h5>
              <p>Rico (worldengines) is the current leader of the MPSJ. He owns the Interstellar Research & Services Corp.</p>
            </div>
            <img className="leader-image" src={discord} alt="Discord account of Rico." />
          </div>
        </section>

        <section className="manifesto">
          <div className="manifesto-content">
            <h2>Our Manifesto</h2>
            <p>• State welfare for the poor.</p>
            <p>• Government loans for small and struggling businesses.</p>
            <p>• Implementation of a minimum wage.</p>
            <p>• Investment incentives in research.</p>
          </div>
        </section>

        <footer className="footer">
          <div className="brands">
            <img className="footer-logo" src={logo} alt="Party logo." />
            <h4 className="footer-logo-name">The Myrenia Party For Social Justice</h4>
          </div>
          <div className="contact-information-section">
            <h5>Contact</h5>
            <p>Discord - worldengines</p>
          </div>
          <div className="legal-information-section">
            <h5>Legal</h5>
            <p>Copyright ©2024 worldengines -This is a fictional Discord Democracy simulation, the party is not real.-</p>
          </div>
        </footer>
      </div>
    </>
}

export default Homepage;