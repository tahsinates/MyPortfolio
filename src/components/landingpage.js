import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{widht: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <img
                alt="Tahsin Ates"
                src = "https://dentalogica-practice.co.uk/wp-content/uploads/2017/05/avatar-male.png"
                className="avatar-img"
              />

              <div className="banner-text">
                <h1>Full Stack Web Developer</h1>

                <hr />
                <p>Genesys | HTML/CSS | JavaScript | React | NodeJS | Express</p>
                <div className="social-links">

                  {/* LindkedIn */}
                  <a href="http://google.com" target="_blank" rel="noopener noreferrer" >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>

                  {/* Github */}
                  <a href="http://google.com" target="_blank" rel="noopener noreferrer" >
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>

                  {/* Instagram */}
                  <a href="http://google.com" target="_blank" rel="noopener noreferrer" >
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>

                  {/* Youtube */}
                  <a href="http://google.com" target="_blank" rel="noopener noreferrer" >
                    <i className="fa fa-youtube-square" aria-hidden="true" />
                  </a>

                </div>
              </div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Landing;
