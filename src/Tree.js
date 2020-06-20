import React from 'react';

const Tree = ({tree}) => {
  return <div key={tree.tree_id}>
    <h4>{tree.spc_common}</h4>
    <h5>{tree.address}</h5>
  </div>
}

export default Tree;
