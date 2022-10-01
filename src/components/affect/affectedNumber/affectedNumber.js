import { createComponent } from '../../../lib/createComponent';
import { elementTypes } from '../../../utils/constants/elementTypes';

import styles from './affectedNumber.scss';

export const affectedNumber = (number) => {
  return createComponent({
    elementType: elementTypes.p,
    child: number,
    attributes: { class: styles.affectedNumber },
  });
};