import gql from 'graphql-tag'

export const GET_ALL_QUERIES = gql`
  query($today: timestamptz) {
    shares(
      where: { created_at: { _gte: $today } }
      order_by: { updated_at: desc }
    ) {
      id
      sharing
      created_at
      updated_at
    }
    pairs(
      where: { created_at: { _gte: $today } }
      order_by: { updated_at: desc }
    ) {
      id
      project
      created_at
      updated_at
    }
    assistance(
      where: { created_at: { _gte: $today } }
      order_by: { updated_at: desc }
    ) {
      id
      assist
      created_at
      updated_at
    }
    sessions(where: { active: { _eq: true } }) {
      active
      status
    }
  }
`
