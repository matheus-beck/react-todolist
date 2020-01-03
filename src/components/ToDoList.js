import React, { Component } from "react";

import ToDoItem from "../components/ToDoItem";

class ToDoList extends Component {
  state = {
    newItem: "",
    items: []
  };

  // Executado assim que o componente aparece em tela
  componentDidMount() {
    const items = localStorage.getItem("items");

    if (items) {
      this.setState({ items: JSON.parse(items) });
    }
  }

  // Executado sempre que houver alterações nas props ou estado
  componentDidUpdate(_, prevState) {
    if (prevState.items !== this.state.items) {
      localStorage.setItem("items", JSON.stringify(this.state.items));
    }
  }

  // Executado quando um componente deixa de existir
  componentWillUnmount() {}

  handleInputChange = e => {
    this.setState({ newItem: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      items: [...this.state.items, this.state.newItem],
      newItem: ""
    });
  };

  handleDelete = item => {
    this.setState({
      items: this.state.items.filter(t => t !== item)
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>My To Do List 📝</h1>
        <ul>
          {this.state.items.map(item => (
            <ToDoItem
              key={item}
              item={item}
              onDelete={() => this.handleDelete(item)}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newItem}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default ToDoList;
