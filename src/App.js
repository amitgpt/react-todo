import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoHeader from './components/header';
import AddNewTask from './components/addnewtask';
import ToDoAppList from './components/todoapplist';

class App extends Component {
  constructor(props) {
    super();
    this.state = {tasks : props.tasks}
    this.updateList = this.updateList.bind(this);
  }

  //update tasksList
  updateList(text) {
    var updatedTasks = this.state.tasks;
    updatedTasks.push(text);
    this.setState({tasks : updatedTasks});
  }


  render() {
    return (
      <div className="App">
        <TodoHeader/>
        <AddNewTask  updateList={this.updateList}/>
        <ToDoAppList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
