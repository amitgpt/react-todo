import React from 'react';

class ToDoAppList extends React.Component{

  constructor(){
    super();
  }

  render(){

    var items = this.props.tasks.map((elem, i) => {
      return <li key = {i} >{elem}</li>
    });
    return(
      <div>
        <ul>
          {items}
        </ul>
      </div>

    );
  }

}

export default ToDoAppList;
