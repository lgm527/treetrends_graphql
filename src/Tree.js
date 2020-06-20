import React from 'react';

const Tree = ({tree}) => {
  return <div>
    <h4>{tree.spc_common}</h4>
    <h5>{tree.address}</h5>
  </div>
}

export default Tree;
