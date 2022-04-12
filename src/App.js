import './App.css';

import human_machine from './images/humanmachine.jpg'
import judy from './images/judy.jpg'
import placeholder from './images/placeholder.jpg'
import run_buddy_mock_up from './images/run-buddy-mock-up.jpg'
import watchopedia_mock_up from './images/watchopedia-mock-up.png'


function App() {
  return (
    <div className="App">
      <div>
  <header>
    <h1>
      <a href="/">
        JUDY MARTINEZ
      </a>
    </h1>
    <nav>
      {/* Unordered list element*/}
      <ul>
        {/* List item element */}
        <li>
          {/* Anchor element */}
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#my-professional-background">My Professional Background</a>
        </li>
        <li>
          <a href="#my-work">My Work</a>
        </li>
        <li>
          <a href="#contact-me">Contact Me</a>
        </li>
      </ul>
    </nav>
  </header>
  {/* hero/jumbotron */}
  <section className="hero">
    <div className="hero-subtitle">
      <h3>Bringing the best of humans and machines together, for the better.</h3>
    </div>
  </section>
  {/* end hero */}
  {/* "about me" section */}
  <section id="about-me" className="intro">
    <h2 className="section-title primary-border">About Me</h2>
    <div className="about-me-info">
      <img src={judy} alt="Judy wearing a flower crown" />
      <p>My name is Judy Martinez. I was born and raised in Houston, TX.
        I'm fluent in two languages (English and Spanish), and I'm currently learning programming languages. 
        I have two dogs and I spend my free time reading, drawing and learning to code.
      </p>
    </div>
  </section>
  {/* "My Professional Background" section */}
  <section id="my-professional-background" className="jobs">
    <h2 className="section-title secondary-border">My Professional Background</h2>
    <div>
      <h3>Google Contact Center AI Dialog Designer, TEKsystems</h3>
      <p>Austin, TX | September 2021 - Present</p>
    </div>
    <div>
      <h3>Siri Annotation Analyst, Apple, Inc.</h3>
      <p>Austin, TX | January 2021 - September 2021</p>
    </div>
    <div>
      <h3>Linguist - Spanish Interpreter and Translator, Freelance</h3>
      <p>Houston, TX | Oct 2016 - January 2021</p>
    </div>
    <div>
      <h3>Sales, Marketing &amp; Accounts Assistant, NSL America, Inc.</h3>
      <p>Houston, TX | September 2013 - May 2016</p>
    </div>
  </section>
  {/* "My Work" section */}
  <section id="my-work" className="projects"> 
    <h2 className="section-title primary-border">My Work</h2>
    <article className="project">
      <p><a href="https://judy-martinez.github.io/run-buddy/" target="-blank">
          <img src={run_buddy_mock_up} alt="Run Buddy project mock up" />
        </a></p>
      <div className="project-info text-left">
        <h3>Run Buddy</h3>
        <h4>Class Activity | HTML/CSS</h4>
        <p>
          Scenario: Hired as a freelance web developer, I built a webpage for Run Buddy, a company that matches runners with personal trainers. 
          Run Buddy was launching a new landing page to attract more sign-ups, and they needed someone to build it. 
          My job was to make the Run Buddy landing page look good, and then hand it off to Run Buddy's internal developers to complete the data collection portion.
          <br /> 
          <br />You can view this project <a href="https://judy-martinez.github.io/run-buddy/" target="_blank">here.</a>
        </p>
      </div>
    </article>
    {/* second project info */}
    <article className="project">
      <div className="project-info text-right">
        <h3>Watchopedia</h3>
        <h4>Group Project | HTML/CSS/JS/Bulma/APIs</h4>
        <p>
          We created a website that populates results of a user's search.
          the user opens Watchopedia and they can search by (actor, tv show, or movie). 
          The website populates results of the search. The user can save some of those titles to favorites.
          <br />
          <br />You can view this project <a href="https://felipezintzun.github.io/watchopedia/" target="_blank">here.</a>
        </p>
        <p />
      </div>
      <p><a href="https://felipezintzun.github.io/watchopedia/" target="_blank">
          <img src={watchopedia_mock_up} alt="Watchopedia project mock up" />
        </a></p>
    </article>
    {/* third project info */}
    <article className="project">
      <p><a href target="_blank">
          <img src={placeholder} alt="placeholder for 3rd project" />
        </a></p>
      <div className="project-info text-left">
        <h3>Another Future Project</h3>
        <h4>Info</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed
          itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!
        </p>
      </div>
    </article>  
  </section>
  {/* "contact me" section */}
  <section id="contact-me" className="contact">
    <h2 className="section-title secondary-border">Contact Me</h2> 
    <div className="contact-info">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440897.06809481274!2d-98.03360022581116!3d30.308055299792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1642747171949!5m2!1sen!2sus" style={{border: 0}} allowFullScreen loading="lazy">
      </iframe>
      <div>
        <h3>Judy Martinez</h3>
        <p>
          Any questions about my work or experience?
          <br />
          Let me know and I'll be more than happy to talk to you!
        </p>
        <address>
          Currently Location: Austin, TX<br />
          Resume Profile: <a href="https://www.linkedin.com/in/judy-mtz/" target="_blank">linkedin.com/in/judy-mtz</a><br />
          P: 713.XXX.XXXX<br />
        </address>
      </div>
    </div>
  </section>
  {/*Footer*/}
  <footer>
    <h2>❤️ Made with love by Judy Martinez.</h2>
    <div>
      © 2021
    </div>
  </footer>
</div>

    </div>
  );
}

export default App;
