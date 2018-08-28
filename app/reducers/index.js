// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import post from './post';
import trendingTags from './trending-tags';
import global from './global';

const rootReducer = combineReducers({
  post,
  trendingTags,
  global,
  router
});

export default rootReducer;
