import React, { Component } from "react";

import "./card.css";
import {Stark} from "./images/stark.png"

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: true };

    this.renderFront = this.renderFront.bind(this);
    this.renderBack = this.renderBack.bind(this);
  }

  getHouseF() {
    switch (this.props.house) {
      case "Stark":
        return "stark-f";
      case "Targaryen":
        return "targaryen-f";
      case "Lannister":
        return "lannister-f";
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
          <div className="title">{this.props.name}</div>
          {/* <span>{this.props.status}</span> */}
          <div className="nickname">{this.props.nickname}</div>
        </div>
        <div className="char-bio">
          <table>
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
                <th>SPOUSE</th>
                <th>BEST FRIEND</th>
                <th>PET</th>
                <th>WEAPON</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {this.props.spouse}
                  <span className="spouse-status">
                    {" "}{this.props.spousestatus}
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
    return (
      <div>{this.state.toggle ? this.renderFront() : this.renderBack()}</div>
    );
  }
}

export default Card;
