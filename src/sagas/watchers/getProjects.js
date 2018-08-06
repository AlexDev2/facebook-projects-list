import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_PROJECTS_SAGA } from '../../constants';
import { setProjects } from '../../actions';
import getProjects from '../../lib/api';

function* workerGetProjectsSaga() {
  const projects = yield call(getProjects);
  yield put(setProjects(projects));
}

export default function* watchGetProjectsSaga() {
  yield takeLatest(GET_PROJECTS_SAGA, workerGetProjectsSaga);
}
