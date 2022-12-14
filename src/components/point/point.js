import { createComponent } from '../../lib/createComponent';
import { elementTypes } from '../../utils/constants/elementTypes';
import { convertLatAndLonToPercents } from '../../utils/helpers/convertLatAndLonToPercents';

import './point.scss';

export const point = (lat, lon) => {
  const pointPercentages = convertLatAndLonToPercents(lat, lon);

  return createComponent({
    elementType: elementTypes.div,
    child: null,
    attributes: {
      style: `bottom:${pointPercentages.percLat}%; left: ${pointPercentages.percLon}%;`,
      class: 'point',
    },
  });
};
