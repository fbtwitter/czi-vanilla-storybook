import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function CardFooter(props) {
  const { className, children, ...other } = props;

  const componentClassName = classnames('cn-c-card__footer', className, {});

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
}

CardFooter.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default CardFooter;
