import React from 'react';
import './Link.css';

const Link = props => (
  <a
    href={props.href}
    className={props.className}
    target="_blank"
  >
    {props.children}
  </a>
);

export default Link;
