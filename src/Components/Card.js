import React, { Component } from "react";
import { graphql } from "react-apollo";
import MutationDeleteCharacter from "../GraphQL/MutationDeleteCharacter";

import axios from "axios";
import "./card.css";
import QueryAllCharacters from "../GraphQL/QueryAllCharacters";


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: true };

    this.renderFront = this.renderFront.bind(this);
    this.renderBack = this.renderBack.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    const card = this.props;
    const img = this.props.image;
    const { deleteCharacterTable } = this.props;

    deleteCharacterTable(card);
    axios
      .delete(img)
      .then(response => {
      })
      .catch(error => {
      });
  }

  getHouseF() {
    switch (this.props.house) {
      case "Stark":
        return "stark-f";
      case "Targaryen":
        return "targaryen-f";
      case "Lannister":
        return "lannister-f";
      case "Greyjoy":
        return "greyjoy-f";
      case "Tyrell":
        return "tyrell-f";
        case "Martell":
        return "martell-f";
        case "Free Folk":
        return "freefolk-f";
        case "Nights Watch":
        return "nightswatch-f";
        case "Tully":
        return "tully-f";
        case "Frey":
        return "frey-f";
        case "Bolton":
        return "bolton-f";
        case "No Affiliation":
        return "na-f";
      default:
    }
  }

  getHouseB() {
    switch (this.props.house) {
      case "Stark":
        return "stark-b";
      case "Targaryen":
        return "targaryen-b";
      case "Lannister":
        return "lannister-b";
      case "Greyjoy":
        return "greyjoy-b";
        case "Tyrell":
        return "tyrell-b";
        case "Martell":
        return "martell-b";
        case "Free Folk":
        return "freefolk-b";
        case "Nights Watch":
        return "nightswatch-b";
        case "Tully":
        return "tully-b";
        case "Frey":
        return "frey-b";
        case "Bolton":
        return "bolton-b";
        case "No Affiliation":
        return "na-b";
      default:
    }
  }

  renderFront() {
    return (
      <div
        className={`card-front ${this.getHouseF()}`}
        value={this.props.id}
        onClick={() => this.setState({ toggle: !this.state.toggle })}
      >
        <img className="char-img" alt=" " src={this.props.image} />
        <div className="char-title">
          <span className="char-name">{this.props.name}</span>
        </div>
      </div>
    );
  }

  renderBack() {
    return (
      <div
        className={`card-back ${this.getHouseB()}`}
        onClick={() => this.setState({ toggle: !this.state.toggle })}
      >
        <div className="char-title">
          <div className="title">
            {this.props.name}{" "}
            <span className="spouse-status">{this.props.status}</span>
          </div>

          <div className="nickname">
            <strong>{this.props.nickname}</strong>
          </div>
        </div>
        <div className="char-bio">
          <table className="bio-table">
            <thead>
              <tr>
                <th>HOUSE</th>
                <th>ALLEGIANCE</th>
                <th>BIRTHPLACE</th>
                <th>AGE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.house}</td>
                <td>{this.props.allegiance}</td>
                <td>{this.props.birthplace}</td>
                <td>{this.props.age}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>SPOUSE/LOVER</th>
                <th>BEST FRIEND</th>
                <th>PET</th>
                <th>WEAPON</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {this.props.spouse}{" "}
                  <span className="spouse-status">
                    {this.props.spousestatus}
                  </span>
                </td>
                <td>{this.props.bestfriend}</td>
                <td>{this.props.pet}</td>
                <td>{this.props.weapon}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="char-quote">
          <span>"{this.props.quote}"</span>
        </div>
      </div>
    );
  }

  render() {
    let newcard;
    if (this.props.delete === true) {
      newcard = (
        <span className="card-button-delete" onClick={this.handleDelete}>
          CLICK TO DELETE
        </span>
      );
    }
    return (
      <div>
        {this.state.toggle ? this.renderFront() : this.renderBack()}
        {newcard}
      </div>
    );
  }
}

export default graphql(MutationDeleteCharacter,  {
  options: {
    update: (proxy, { data: { deleteCharacterTable } }) => {
        const query = QueryAllCharacters;
        const data = proxy.readQuery({ query });
        data.listCharacterTables.items = data.listCharacterTables.items.filter(card => card.id !== deleteCharacterTable.id);
        proxy.writeQuery({ query, data });
    }
},
  props: props => ({
    deleteCharacterTable: card => {
      props.mutate({
        variables: { id: card.id },
        optimisticResponse: {
          deleteCharacterTable: { ...card, __typename: "Character" },
        }
      });
    }
  })
})(Card);
