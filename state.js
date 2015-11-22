import { combineReducers } from 'redux';

function test(state = false, action) {
  return state;
}

export const reducers = combineReducers({
  test,
});
