import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
          <h1>Web Design</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio2 && resumeData.portfolio2.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                     <a href={item.modal} title="">
                        <img src={item.image} alt={item.alt}/>
                        <div className="overlay">
                           <div className="portfolio-item-meta">
          					       <h2 className="project-title">{item.name}</h2>
          					   </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus"></i></div>
                     </a>

                  </div>
                  <div id={item.modalId} className="popup-modal mfp-hide">
                    <img className="scale-with-grid" src={item.image} alt={item.alt} />
                    <div className="description-box">
                      <h4>{item.name}</h4>
                      <hr/>
                      <p>{item.description}</p>
                        <span className="categories"><i className="fa fa-tag"></i>Branding, Webdesign</span>
                    </div>
                      <div className="link-box">
                        <a href={item.url} target="_blank"><i class="fa fa-globe" aria-hidden="true"></i>Website</a>&nbsp;&nbsp; 
                        <a href={item.github} target="_blank"><i class="fa fa-github" aria-hidden="true"></i>Github</a>
                        <a className="popup-modal-dismiss">Close</a>
                      </div>
                  </div>
              </div> 
              )
            })
          }
      </div>
  </section>
        );
  }
}