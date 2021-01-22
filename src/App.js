import './App.css';
import React, {Component} from 'react';
import { CardComponent } from './Card-Component/cardcomponent';
import { SearchBox } from './SearchBox/searchbox';

class App extends Component {
  constructor() {
    super();
    this.state={
      monsters:[],
      search:''
  };
  }
  changed=(event) => {
    this.setState({search:event.target.value});
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}));
  }
  render() {
    const {monsters,search} = this.state;
    const filteredMonsters = monsters.filter(
      monster=> monster.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Doodles</h1>
        <SearchBox placeholder="Search monster" changed={this.changed} />
       
        <CardComponent monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
