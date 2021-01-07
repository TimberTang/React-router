import React, { Component } from 'react'

class List extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return ( 
      <div>List-page--{this.state.id}</div>
     );
  }

  componentDidMount () {
    console.log(this.props.match.params.id);
    const tid = this.props.match.params.id
    this.setState({
      id: tid
    })
  }

}
 
export default List;