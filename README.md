# Create Reducer

## Behind

Read this ebook [Programming Javascript Applications](https://www.safaribooksonline.com/library/view/programming-javascript-applications/9781491950289/apa.html) and find 'Don't Use `switch`'

## Installation

```
npm i -S create.reducer

// or

yarn add create.reducer

```

## Usage

NOTE: Assume you use seamless-immutable / immutable-js.
otherwise use spread object instead

```javascript

import createReducer from 'createreducer'

createReducer(INITIAL_STATE, {
 [FAILURE](state, { error }) {
   return state.set('error', error);
 },
 [INCREMENT](state) {
   return state.update('count', increment);
 },
 [LOAD_DATA_SUCCESS](state, action) {
   return state.merge({ placeholderData: action.data });
 },
 [TICK_CLOCK](state, action) {
   return state.set('lastUpdate', action.ts).set('light', !!action.light);
 },
});

// or

const failure = (state, { error }) => state.set('error', error);

const updateTick = (state, action) => state.set('lastUpdate', action.ts).set('light', !!action.light);

createReducer(INITIAL_STATE, {
 [FAILURE]: failure,
 [TICK_CLOCK]: updateTick
});

```
