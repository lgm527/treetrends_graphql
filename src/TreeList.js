import React from 'react';
import Tree from './Tree';
import { Query } from 'react-apollo';
import { GET_TREES } from './utils';

const List = ({ trees }) => (
  <div>
    {trees.map(tree => <Tree key={tree.tree_id} tree={tree} /> )}
  </div>
);

const TreeList = () => {
  return <Query query={GET_TREES}>
  {({ loading, error, data }) => {
    console.log(data.trees);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    if (data) {
      return <List trees={data.trees} />;
    }
  }}
  </Query>
}

export default TreeList;
