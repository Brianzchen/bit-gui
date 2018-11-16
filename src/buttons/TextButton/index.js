import React from 'react';

import BaseButton from 'buttons/BaseButton';

const TextButton = ({ children, otherProps }) => (
  <BaseButton
    {...otherProps}
  >
    {children}
  </BaseButton>
);

export default TextButton;
