import { combineReducers } from 'redux';

import { settings } from './settings';

const appReducer = combineReducers({
  settings,

});

const rootReducer = (state, action) => {
  // clean reducers
  if (action.type === 'LOGOUT_SUCCESS') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
export default rootReducer;
