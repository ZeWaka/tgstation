/**
 * @file
 * @copyright Aleksej Komarov 2020
 * @license MIT
 */

import { classes } from 'common/react';

export const Divider = props => {
  const {
    vertical,
    hidden,
  } = props;
  return (
    <div
      className={classes([
        'Divider',
        hidden && 'Divider--hidden',
        vertical
          ? 'Divider--vertical'
          : 'Divider--horizontal',
      ])} />
  );
};
