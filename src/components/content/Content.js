import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Link from '../link';
import CollegeSelector from '../collegeSelector';

import './Content.css';

class Content extends Component {

  handleScrollToElement = () => {;
    this.scrollEl.scrollIntoView({behavior: "smooth"});
  };

  renderContentSection1() {
    return (
      <section className='container-content-1'>
        <h1 className='stanza-h1 why-stanza'>WHY STANZA?</h1>
        <p className='why-stanza-desc desc'>Stanza is not just a place to live, it is a lifestyle you choose.<br/> A multi-level approach to student accommodation, Stanza unites unique experiences of comfort, community, and collaboration at exceptional prices to redefine student living in India.</p>
        <iframe
          width="560"
          height="315"
          clasName="embed-responsive-item my-3 embedded-video"
          src="https://www.youtube.com/embed/lPoqVIg86Ww?rel=0"
          frameBorder="0"
          allowFullScreen="allowFullScreen"
        ></iframe>
        <div><img
          onClick={this.handleScrollToElement}
          className="down-arrow" src="https://d20370j06smcvr.cloudfront.net/sl_repo_image/images/mobile/why-us-downarrow.png"
        /></div>
      </section>
    );
  }

  renderContentSection2() {
    return (
      <section className='bg-green container-content-2' ref={el => (this.scrollEl = el)}>
        <h2 className="stanza">STANZA vs. PG</h2>
        <p className="stanza-pg-desc desc">Stanza residences are professionally managed and are focused on elevating the overall student experience with a number of high-quality service and product offerings, We are not that neighborhood uncle and aunt who want to make the extra buck by leasing the top floor of their house to as many students as possible, nor are we fly-by-night property developers who build hostels with the sole aim of maximizing short term returns. We are truly "students first" in approach.</p>
        <img src='https://d20370j06smcvr.cloudfront.net/sl_repo_image/images/mobile/stanza-vs-pg1.png'/>
      </section>
    );
  }

  renderContentSection3() {
    return (
      <section className="container-content-3">
        <h2 className='stanza stanza-flat'>STANZA vs. FLAT</h2>
        <p className='desc'>
          Stanza residences help you save your monthly spends while allowing the flexibility and freedom to enjoy college life to the fullest. The cost of Stanza residences is at par with or below current market standards and promises a hassle-free living experience.
        <br/>
        <br/>
          At Stanza, you move in and begin to live right from the first day - no bills to pay, no maintenance and repairs to worry about, no complaining maids and cleaners to deal with and no neighbours to morally police you!
        </p>
      </section>
    );
  }

  renderContentSection4() {
    return (
      <section className='exploring-residence' >
        <h1 className='stanza-h1 stanza-residence'>EXPLORE RESIDENCES</h1>
        <CollegeSelector />
      </section>
    )
  }

  render() {
    return (
      <div className='container'>
        {this.renderContentSection1()}
        {this.renderContentSection2()}
        {this.renderContentSection3()}
        {this.renderContentSection4()}
      </div>
    )
  }
}

export default Content;
