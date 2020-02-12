import React, {Component} from 'react';
import {CardList} from  './components/card-list/card-list.component';
import {Searchbox} from './components/searchbox/searchbox.component';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    //How to set 'this''s context without arrow functions
    //this.handleChange = this.handleChange.bind(this);

  }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
    }

    handleChange = event => {
      this.setState({ searchField: event.target.value });
    }
    
    render(){
      const{ monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter(monster =>
          monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
      return(
        <div className='App'>
          <Searchbox
          placeholder='search monsters'
          handleChange = {this.handleChange} />
          <CardList monsters={filteredMonsters}>
          </CardList>
        </div>
      );
    }
  }

export default App;
