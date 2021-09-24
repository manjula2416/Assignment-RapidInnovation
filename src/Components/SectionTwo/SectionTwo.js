import React from "react";
import "./SectionTwo.css";

function SectionTwo() {
  return (
    <React.Fragment>
      <div className="section-two">
        <div className="form-card">
          <img
            className="img-avatar"
            src="https://landkit.goodthemes.co/assets/img/photos/photo-2.jpg"
            alt="Avatar"
          />
          <form className="form-res">
            <div>
              <label for="input-name">Name</label> <br />
              <input type="text" className="input-name" />
            </div>
            <div>
              <label for="input-name">Email</label> <br />
              <input type="email" className="input-name" />
            </div>
            <div>
              <label for="input-name">Password</label> <br />
              <input type="password" className="input-name" />
            </div>
            <div>
              <button className="form-btn">Download a sample</button>
            </div>
          </form>
        </div>
        <div className="resources">
          <span>The most useful resource</span>
          <br />
          <span class="res-div">
            ever created for{" "}
            <span data-typed="{'strings': ['developers.', 'founders.', 'designers.']}">
              developers.
            </span>
            <span class="typed-cursor typed-cursor--blink" aria-hidden="true">
              |
            </span>
          </span>
          <p>
            Using Landkit to build your site means never worrying about
            designing another page or cross browser compatibility. Our
            ever-growing library of components and pre-designed layouts will
            make your life easier.
          </p>

          <div className="support">
            <div className="lifetime">
              <span className="mark">&#10003;</span>
              Lifetime updates
            </div>
            <div className="tech">
              <span className="mark">&#10003;</span>
              Tech support
            </div>
            <div className="asset">
              <span className="mark">&#10003;</span>Tons of assets
            </div>
            <div className="integration">
              <span className="mark">&#10003;</span>Integration ready
            </div>
          </div>
        </div>
        <div className="bootstrap-themes">
          <div className="bt-text-container">
            <div className="resources">
              <span>
                We have lots of experience <br />
                <span className="res-div-2">building Bootstrap themes</span>
              </span>
              <p>
                We've built well over a dozen Bootstrap themes and sold tens of
                thousands of copies.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h24v24H0z"></path>
                    <path
                      d="M12 8H8a4 4 0 00-4 4v1a3 3 0 003 3v2a5 5 0 01-5-5v-1a6 6 0 016-6h4V4.728a.5.5 0 01.8-.4l2.856 2.133a.5.5 0 01-.001.802l-2.857 2.121A.5.5 0 0112 8.983V8z"
                      fill="#335EEA"
                    ></path>
                    <path
                      d="M12.058 16H16a4 4 0 004-4v-1a3 3 0 00-3-3V6a5 5 0 015 5v1a6 6 0 01-6 6h-3.942v.983a.5.5 0 01-.798.401l-2.857-2.12a.5.5 0 010-.803l2.856-2.134a.5.5 0 01.8.401V16z"
                      fill="#335EEA"
                      opacity=".3"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="card-text">
                <span className="card-title">
                  Bootstrap users since the beginning
                </span>
                <span className="card-para">
                  We've been developing with Bootstrap since it was publicly
                  released in 2011.
                </span>
              </div>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h24v24H0z"></path>
                    <path
                      d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z"
                      fill="#335EEA"
                    ></path>
                    <rect
                      fill="#335EEA"
                      opacity=".3"
                      transform="rotate(15 12 12)"
                      x="11"
                      y="4"
                      width="2"
                      height="16"
                      rx="1"
                    ></rect>
                  </g>
                </svg>
              </div>
              <div className="card-text">
                <span>Deep understanding of Bootstrap</span>
                <br />
                <span className="card-para">
                  We've watched Bootstrap grow up over the years and understand
                  it better than almost anyone.
                </span>
              </div>
            </div>
          </div>
          <div className="bt-img-container">
            <img
              width="40%"
              className="bt-img"
              src="https://landkit.goodthemes.co/assets/img/screenshots/desktop/dashkit.jpg"
            />
          </div>
        </div>
        {/* <div className="slider-container">
          <h2>Our customers are our biggest fans.</h2>
          <p>
            We don't like to brag, but we don't mind letting our customers do it
            for us.
            <br /> Here are a few nice things folks have said about our themes
            over the years.
          </p>
          <div>
            
          </div>
        </div> */}

        <div className="numbers">
          <div className="numbers-text">
            <div className="resources">
              <span>Stay focused on your business. </span>
              <br />
              <span className="res-div-2">Let us handle the design</span>
              <p>
                You have a business to run. Stop worring about cross-browser
                bugs, designing new pages, keeping your components up to date.
                Let us do that for you.
              </p>
            </div>
            <div>
              <div className="satisfaction">
                <p>100%</p>
                <p>Satisfaction</p>
              </div>
              <div className="supp">
                <p>24/7</p>
                <p>Support</p>
              </div>
              <div className="sales">
                <p>100k+</p>
                <p>Sales</p>
              </div>
            </div>
          </div>
          <div className="numbers-img">
            <img
              width="40%"
              src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-8.png"
            />
          </div>
          <div className="resources pricing" style={{ textAlign: "center" }}>
            <div>Fair, simple pricing for all.</div>
            <p>
              All types of businesses need access to development resources, so
              we give you the option to decide how much you need to use.
            </p>
            <span>Annually</span>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <span>Monthly</span>
            <div className="cards">
              <div class="card-one">
                <div className="card-type">Standard</div>
                <div>
                  <span className="price">$29</span> <span>/mo</span>
                  <p>per seat</p>
                  <div className="card-price">
                    <div>
                      <span className="mark">&#10003;</span>
                      <span>Rich, responsive landing pages</span>
                    </div>
                    <div>
                      <span className="mark">&#10003;</span>
                      <span>100+ styled components</span>
                    </div>
                    <div>
                      <span className="mark">&#10003;</span>
                      <span>Flexible, simple license</span>
                    </div>
                    <div>
                      <span className="mark">&#10003;</span>
                      <span>Speedy build tooling</span>
                    </div>
                    <div>
                      <span className="mark">&#10003;</span>
                      <span>6 months free support included</span>
                    </div>
                  </div>
                </div>
                <div className="btn-link">
                  <a href="#getitnow" className="active">
                    Get it now
                  </a>
                </div>
              </div>
              <div class="card-one">
                <div className="card-type">Enterprise</div>
                <p>
                  We offer variable pricing with discounts for larger
                  organizations. Get in touch with us and we’ll figure out
                  something that works for everyone.
                </p>
                <div className="btn-link2">
                  <a href="#contactus" className="single">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-4">
          <div className="section4-main">
            <span className="mark1">&#63;</span>
            <span>Can I use Landkit for my clients?</span>
            <p>
              Absolutely. The Bootstrap Themes license allows you to build a
              website for personal use or for a client.
            </p>
          </div>
          <div className="section4-main">
            <span className="mark1">&#63;</span>
            <span>Is there a money back guarantee?</span>
            <p>
              Yup! Bootstrap Themes come with a satisfaction guarantee. Submit a
              return and get your money back.
            </p>
          </div>
          <br />
          <div className="section4-main">
            <span className="mark1">&#63;</span>
            <span>Do I get free updates?</span>
            <p>
              Yes. We update all of our themes with each Bootstrap update, plus
              are constantly adding new components, pages, and features to our
              themes.
            </p>
          </div>
          <div className="section4-main">
            <span className="mark1">&#63;</span>
            <span>Does it work with Rails? React? Laravel?</span>
            <p>
              Yes. Landkit has basic CSS/JS files you can include. If you want
              to enable deeper customization, you can integrate it into your
              assets pipeline or build processes.
            </p>
          </div>
          <div className="getkit-main">
            <div className="getkit">Get Landkit and save your time.</div>
            <p>Stop wasting time trying to do it the "right way" and build a site from scratch. Landkit is faster, easier, and you still have complete control.</p>
            <button className="getkit-btn">Buy it now </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SectionTwo;
