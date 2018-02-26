'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createReducer;
function createReducer(initialState, actions) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    if (typeof actions[action.type] !== 'function') {
      return state;
    }
    return actions[action.type](state, action);
  };
}