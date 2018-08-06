import { all, fork } from 'redux-saga/effects';

import watchGetProjectsSaga from './watchers/getProjects';

export default function* root() {
  yield all([
    fork(watchGetProjectsSaga),
  ]);
}
