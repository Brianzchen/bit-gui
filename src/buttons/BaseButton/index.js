import React from 'react';

const BaseButton = ({ children, ...otherProps }) => (
  <button
    type="button"
    {...otherProps}
  >
    {children}
  </button>
);

export default BaseButton;
