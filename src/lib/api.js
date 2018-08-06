async function getProjects() {
  const response = await fetch('https://api.github.com/orgs/facebook/repos');
  return response.json();
}

export default getProjects;
