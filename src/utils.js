import gql from 'graphql-tag';

export const GET_TREES = gql`
  query getTrees {
    trees @rest(type: "Trees", path: "?nta_name=Upper%20West%20Side&status=Alive&steward=None&$limit=3000") {
      tree_id
      spc_common
      address
    }
}
`
