import React from 'react';
import { Query } from 'react-apollo';
//import { GET_TREES } from '../utils';

class TreeList extends React.Component {

  state = {
    trees: []
  }

  componentDidMount() {
    fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json?nta_name=Upper%20West%20Side&status=Alive&steward=None&$limit=3000', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-App-Token': process.env.REACT_APP_TREE_KEY
      }
    })
    .catch(error => console.log(error))
    .then(res => res.json())
    .then(trees => {
      this.setState({
        trees
      })
    })
  }

  render() {
    let trees = this.state.trees.map((tree) => {
      return <p key={tree.tree_id}>{tree.spc_common} at {tree.address}</p>
    })
    return (
      <div>
      {trees}
      </div>
    )
  }

}

export default TreeList;
