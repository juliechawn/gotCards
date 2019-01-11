import React, { Component } from "react";
import "./card.css";

import Card from "./Card";

import { graphql, compose, withApollo } from "react-apollo";
import QueryAllCharacters from "../GraphQL/QueryAllCharacters";

class AllCharacters extends Component {

  render() {
    return (
      <div>
        <header className="header">
          <p>GAME OF THRONES</p>
        </header>
        <div className="container">
          {this.props.cards.map((card, i) => (
            <Card 
                key={i}
                id={card.id}
                image={card.image}
                name={card.name}
                house={card.house}
                actor={card.actor}
                status={card.status}
                weapon={card.weapon}
                pet={card.pet}
                spouse={card.spouse}
                spousestatus={card.spousestatus}
                age={card.age}
                birthplace={card.birthplace}
                bestfriend={card.bestfriend}
                quote={card.quote}
                nickname={card.nickname}
                allegiance={card.allegiance}
                />
          ))}
        </div>
      </div>
    );
  }
}

export default withApollo(
  compose(
    graphql(QueryAllCharacters, {
      options: {
        fetchPolicy: "cache-and-network"
      },
      props: ({ data: { listCharacters = { items: [] } } }) => ({
        cards: listCharacters.items
      })
    })
  )(AllCharacters)
);
