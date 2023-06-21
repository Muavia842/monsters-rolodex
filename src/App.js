import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-Box/search-box.component";
import './App.css'
import './index.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredmonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
       <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder="search monster"
          handelChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredmonster} />
      </div>
    );
  }
}

export default App;
