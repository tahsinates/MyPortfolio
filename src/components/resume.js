import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: '200px'}}
              />
            </div>

            <h2 style={{paddingTop: '2em'}}>Tahsin Ates</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>61 Westcroft Square, W6 0TA, London, United Kingdom</p>
            <h5>Phone</h5>
            <p>+44 7379 354040</p>
            <h5>Email</h5>
            <p>tahsinates@gmail.com</p>
            <h5>Web</h5>
            <p>www.tahsinates.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2002}
              endYear={2006}
              schoolName="Eastern Mediternean University"
              schoolDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
            />

            <Education
              startYear={2007}
              endYear={2008}
              schoolName="Cambridge University"
              schoolDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
            />

            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="Software Consultant / NCR / Istanbul, TURKEY"
              jobDescription="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
             />

             <Experience
               startYear={2009}
               endYear={2012}
               jobName="Midlevel Software Developer / IBTECH / Kocaeli, TURKEY"
               jobDescription="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
              />

              <Experience
                startYear={2013}
                endYear={2016}
                jobName="Senior Software Developer / ING BANK / Istanbul, TURKEY"
                jobDescription="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
               />

               <Experience
                 startYear={2017}
                 endYear={2018}
                 jobName="Senior Architect / AKBANK A.S. / Istanbul, TURKEY"
                 jobDescription="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                />

                <Experience
                  startYear={2017}
                  endYear={2018}
                  jobName="Genesys Consultant / Genesys / London, UNITED KINGDOM"
                  jobDescription="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                 />

                 <hr style={{borderTop: '3px solid #e22947'}} />

                 <h2>Skills</h2>

                 <Skills
                   skill="JavaScript"
                   progress = {70}
                 />

                 <Skills
                   skill="React"
                   progress = {70}
                 />
                 <Skills
                   skill="HTML/CSS"
                   progress = {80}
                 />
                 <Skills
                   skill="NodeJS"
                   progress = {25}
                 />

          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Resume;
