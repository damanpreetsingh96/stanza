import React, {Component} from 'react';

import Link from '../link';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='row'>
          <div className='list'>
            <ul>
              <li><Link href="https://www.stanzaliving.com/product/professionally-designed-hostel-pg-for-boys-girls">product</Link></li>
              <li><Link href="https://www.stanzaliving.com/amenities/modern-services-facilities-in-hostel-pg-for-girls-boys">amenities</Link></li>
              <li><Link href="https://www.stanzaliving.com/community/student-fun-discount-in-best-pg-for-girls-boys ">community</Link></li>
              <li><Link href="https://www.stanzaliving.com/technology/security-internet-payment-system-in-pg-for-students">technology</Link></li>
            </ul>
          </div>
          <div className='list'>
            <ul>
              <li><Link href="https://www.stanzaliving.com/">refer & earn</Link></li>
              <li><Link href="https://www.stanzaliving.com/partnering">partner with us</Link></li>
              <li><Link href="https://www.stanzaliving.com/news">stanza in the news</Link></li>
            </ul>
          </div>
          <div className='list'>
            <ul>
              <li><Link href="https://www.stanzaliving.com/faqpage">FAQ</Link></li>
              <li><Link href="https://www.stanzaliving.com/terms-condition">T&C</Link></li>
              <li><Link href="https://www.stanzaliving.com/privacy-policy">privacy policy</Link></li>
            </ul>
          </div>
          <div className='list'>
            <ul>
            <li><Link href="https://www.stanzaliving.com/career/best-student-accommodation-platform-in-india">careers</Link></li>
            <li><Link href="https://www.stanzaliving.com/contact-us/find-best-pg-hostel-in-delhi-greater-noida-india">contact</Link></li>
            <li><Link href="https://stanzaliving.blog/">blog</Link></li>
            </ul>
          </div>
        </div>
        <div className='iso'>
          <div className='fl'>ISO 9001:2015 Certified</div>
          <div className='fr'>
            <Link href="https://www.linkedin.com/company/stanzaliving/?originalSubdomain=in">
              <img className='social' src='https://d20370j06smcvr.cloudfront.net/sl_repo_image/images/mobile/linkin.png' />
            </Link>
            <Link href="https://www.facebook.com/StanzaLiving/">
              <img className='social' src='https://d20370j06smcvr.cloudfront.net/sl_repo_image/images/mobile/facebook.png' />
            </Link>
            <Link href="https://www.instagram.com/stanzaliving/">
              <img className='social' src='https://d20370j06smcvr.cloudfront.net/sl_repo_image/images/mobile/insta.png' />
            </Link>
            <Link href="https://twitter.com/stanza_living?lang=en">
              <img className='social' src='https://d20370j06smcvr.cloudfront.net/sl_repo_image/images/mobile/twitter.png' />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
