import { GET_PROJECTS_SAGA, SET_PROJECTS } from '../constants';

export function setProjects(projects) {
  return {
    type: SET_PROJECTS,
    projects
  };
}

//Sagas
export function getProjectsSaga() {
  return {
    type: GET_PROJECTS_SAGA
  };
}
