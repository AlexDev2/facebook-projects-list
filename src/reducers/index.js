import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import projectsReducer from './projects';

export default combineReducers({
  routing: routerReducer,
  projectsReducer
});
