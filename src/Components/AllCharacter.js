import React, { Component } from "react";
import "./card.css";

import Card from "./Card";
import NewCard from "./NewCard";

import { graphql, compose, withApollo } from "react-apollo";
import QueryAllCharacters from "../GraphQL/QueryAllCharacters";

class AllCharacters extends Component {
  render() {
    let cards = this.props.cards.sort((a,b) => b.delete - a.delete);
    cards = this.props.cards.map((card, i) => {
      return(
      <Card 
      key={i}
      id={card.id}
      delete={card.delete}
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
      )}
    );
    return (
      <div>
        <header className="got-header">
          <p>GAME OF THRONES PLAYING CARDS</p>
          <p className="got-subheader">Click on a card to see the back!</p>
        </header>
        <NewCard />
        <div className="card-container">
           {cards}
        </div>
      </div>
    )
  }
}

export default withApollo(
  compose(
    graphql(QueryAllCharacters, {
      options: {
        fetchPolicy: "cache-and-network"
      },
      props: ({ data: { listCharacterTables = { items: [] } } }) => ({
        cards: listCharacterTables.items
      })   
    })
  )(AllCharacters)
);
