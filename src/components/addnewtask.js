import React from 'react';

class AddNewTask extends React.Component{

  constructor() {
    super();
    this.justSubmited = this.justSubmited.bind(this);
  }

  justSubmited(event) {
    event.preventDefault();
    var input = event.target.querySelector('input');
    var value = input.value;
    input.value = '';
    this.props.updateList(value);
  }

  render(){
    return(
      <div>
      <form onSubmit= {this.justSubmited}>
        <input type="text"></input>
      </form>
    </div>
    );
  }

}

export default AddNewTask;
