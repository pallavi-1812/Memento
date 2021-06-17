import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth';

export default combineReducers({ posts, auth }); // we can keep only posts since key value are same