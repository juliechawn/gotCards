import gql from "graphql-tag";

export default gql(`
query {
  listCharacterTables {
    items {
      id
      image
      name
      house
      actor
      status
      weapon
      pet
      spouse
      spousestatus
      age
      birthplace
      bestfriend
      quote
      nickname
      allegiance
    }
  }
}`);
