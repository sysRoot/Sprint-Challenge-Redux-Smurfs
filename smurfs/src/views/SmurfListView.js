import React from 'react';
import { connect } from 'react-redux';

import SmurfList from '../components/SmurfList';
import { getSmurfs } from '../actions/index';

class SmurfListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div>
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('this is my' + state);
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  {
    getSmurfs
  }
)(SmurfListView);
