import React, { Component } from 'react';
import Typist from 'react-typist';

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#portfolio">Web Applications</a></li>
               <li><a className="smoothscroll" href="#resume">Web Design</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
              
               <h1 className="responsive-headline">
                   <Typist>
                    <p> {resumeData.name} </p>
                    <Typist.Delay ms={500} />
                        Front End Developer
                  </Typist>
               </h1>
               <Typist>
               <Typist.Delay ms={2450} />
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.roleDescription}
               </h3>
               </Typist>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#portfolio"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}