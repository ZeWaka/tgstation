/**
 * @file
 * @copyright Aleksej Komarov 2020
 * @license MIT
 */

import { classes } from 'common/react';
import { Box } from './Box';

export const BlockQuote = props => {
  const { className, ...rest } = props;
  return (
    <Box
      className={classes([
        'BlockQuote',
        className,
      ])}
      {...rest} />
  );
};
