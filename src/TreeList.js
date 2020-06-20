import React from 'react';
import Tree from './Tree';
import { Query } from 'react-apollo';
import { GET_TREES } from './utils';

// class TreeList extends React.Component {
//
//   render() {
//     let trees = this.state.trees.map((tree) => {
//       return <p key={tree.tree_id}>{tree.spc_common} at {tree.address}</p>
//     })
//     return (
//       <div>
//       {trees}
//       </div>
//     )
//   }
//
// }

const List = ({ trees }) => (
  <div>
    {trees.map(tree => <Tree key={tree.tree_id} tree={tree} /> )}
  </div>
);

const TreeList = () => {
  return <Query query={GET_TREES}>
  {({ loading, error, data }) => {
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    if (data) {
      return <List trees={data.trees} />;
    }
  }}
  </Query>
}

export default TreeList;
