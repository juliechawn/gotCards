import gql from "graphql-tag";

export default gql(`
mutation($id: ID!) {
  deleteCharacter(input: {id: $id}) {
    id
		name
		house
		actor
		status
  }
}`);