import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sidebar, Segment, Menu, Table } from 'semantic-ui-react';

import { getProjectsSaga } from '../../actions';

import styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: null,
    };
  }

  componentDidMount() {
    this.props.getProjectsSaga();
  }

  handleClick = (value) => {
    this.setState({ projectId: value });
  }

  handleBtnOnClick = () => {
    this.props.getProjectsSaga();
  }

  sortByWatchers = (list) => {
    const sortedValue = list.sort((a, b) => a.watchers < b.watchers);
    return sortedValue;
  }

  renderHomePage = () => (
    <div style={styles.home}>
      <h1>Welcome to the projects list page.</h1>
      <p>It is to list projects owned by Facebook on Github</p>
    </div>
  )

  render() {
    const { projects } = this.props;
    const { projectId } = this.state;
    const selectedProject = projects.filter(item => item.id === projectId);

    return (
      <div style={styles.container}>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation="overlay" inverted vertical visible width="thin">
            {projects.map((item, index) => (
              <Menu.Item as="a" onClick={() => this.handleClick(item.id)} key={index}>
                {item.name}
              </Menu.Item>
            ))}
          </Sidebar>
          <Sidebar.Pusher>
            {!projectId ? this.renderHomePage() : (
              <Segment basic>
                <Table
                  striped
                >
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Id</Table.HeaderCell>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Stars</Table.HeaderCell>
                      <Table.HeaderCell>Folks</Table.HeaderCell>
                      <Table.HeaderCell>Watchers</Table.HeaderCell>
                      <Table.HeaderCell>Description</Table.HeaderCell>
                      <Table.HeaderCell>URL</Table.HeaderCell>
                      <Table.HeaderCell>Language</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>{selectedProject[0].id}</Table.Cell>
                      <Table.Cell>{selectedProject[0].name}</Table.Cell>
                      <Table.Cell>{selectedProject[0].stargazers_count}</Table.Cell>
                      <Table.Cell>{selectedProject[0].forks}</Table.Cell>
                      <Table.Cell>{selectedProject[0].watchers}</Table.Cell>
                      <Table.Cell>{selectedProject[0].description}</Table.Cell>
                      <Table.Cell>{selectedProject[0].git_url}</Table.Cell>
                      <Table.Cell>{selectedProject[0].language}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
            )}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projectsReducer.projects
});

const mapDispatchToProps = dispatch => ({
  getProjectsSaga: () =>
    dispatch(getProjectsSaga())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
