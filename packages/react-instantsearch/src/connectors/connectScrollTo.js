import PropTypes from 'prop-types';

import createConnector from '../core/createConnector';
import { getCurrentRefinementValue } from '../core/indexUtils';

/**
 * connectScrollTo connector provides the logic to build a widget that will
 * let the page scroll to a certain point.
 * @name connectScrollTo
 * @kind connector
 * @propType {string} [scrollOn="page"] - Widget searchState key on which to listen for changes, default to the pagination widget.
 * @providedPropType {any} value - the current refinement applied to the widget listened by scrollTo
 */
export default createConnector({
  displayName: 'AlgoliaScrollTo',

  propTypes: {
    scrollOn: PropTypes.string,
  },

  defaultProps: {
    scrollOn: 'page',
  },

  getProvidedProps(props, searchState) {
    const id = props.scrollOn;
    const value = getCurrentRefinementValue(
      props,
      searchState,
      this.context,
      id,
      null,
      currentRefinement => currentRefinement
    );
    return { value };
  },
});
