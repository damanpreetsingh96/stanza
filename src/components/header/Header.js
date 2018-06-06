import React, { Component } from 'react';

import Link from '../link';
import './Header.css';


import dropDown from '../../img/drop-down.svg';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      showPopover: false,
    };
  }
  renderHeaderLogo() {
    return (
      <Link href='https://www.stanzaliving.com/'>
        <img
          src='https://d20370j06smcvr.cloudfront.net/images/stanza-logo.svg'
          className='header-logo'
        />
      </Link>
    );
  }

  renderHeaderItems() {
    return (
      <ul className="header-nav-bar">
        <li><Link
          href='https://www.stanzaliving.com/about-us/iit-iim-alumni-initiative'
          className="nav-item">
          about us
        </Link></li>
        <li>
          <div className="nav-item" data-actionid="popover">
          <Link className="popOver-link">stanza promise</Link>
            <img src={dropDown} className="drop-down"/>
          </div>
        </li>
        <li><Link
          href="https://www.stanzaliving.com/why-stanza/comfortable-community-living-pg-for-indian-students"
          className="nav-item">
          why stanza
        </Link></li>
        <li><Link
          href="https://www.stanzaliving.com/residence/hostel-pg-for-girls-boys-ncr-delhi-north-south-campus-greater-noida"
          className="nav-item">
          residences
        </Link></li>
        <li><Link
          href="https://www.stanzaliving.com/gallery/room-pictures-hostel-pg-for-girls-boys-in-delhi-greater-noida"
          className="nav-item">
          gallery
        </Link></li>
      </ul>
    )
  }

  renderHeaderButton() {
    return (
      <Link
        href="https://www.stanzaliving.com/usercontact"
        className="header-button-link">
        <p className="header-button-item">request a call</p>
      </Link>
    );
  }

  renderPopover() {
    return (
      <section className="popOver">
        <ul className='popOver-list'>
          <li><Link href="https://www.stanzaliving.com/product/professionally-designed-hostel-pg-for-boys-girls">Product</Link></li>
          <li><Link href="https://www.stanzaliving.com/amenities/modern-services-facilities-in-hostel-pg-for-girls-boys">Amenities</Link></li>
          <li><Link href="https://www.stanzaliving.com/community/student-fun-discount-in-best-pg-for-girls-boys">Community</Link></li>
          <li><Link href="https://www.stanzaliving.com/technology/security-internet-payment-system-in-pg-for-students">Technology</Link></li>
        </ul>
      </section>
    )
  }
  showPopover = event => {
    const actionId = event.target.dataset && event.target.dataset.actionid;
    const isOnPopoverButton = actionId === 'popover';
    isOnPopoverButton && this.setState({showPopover: true});
  };

  hidePopover = () => {
    setTimeout(() => this.setState({showPopover: false}), 100);
  };

  render() {
    return (
      <div className="wrapper" onMouseLeave={this.hidePopover}>
      <div className="header" onMouseOver={this.showPopover}>
        {this.renderHeaderLogo()}
        {this.renderHeaderItems()}
        {this.renderHeaderButton()}
      </div>
        {this.state.showPopover && this.renderPopover()}
      </div>
    );
  }
}

export default Header;
