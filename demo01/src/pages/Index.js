import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          cid: 123, title: 'timbertang的博客1'
        }, 
        {
          cid: 1213, title: 'timbertang的博客2'
        }, 
        {
          cid: 3, title: 'timbertang的博客3'
        }, 
        {
          cid: 44, title: 'timbertang的博客4'
        }
      ]
    }
    console.log(this.props);
    this.props.history.push('/home/')
  }

  render () {
    return ( 
      <div>
          {/* <Redirect to='/home'/> */}
          <h2>TimberTang</h2>
        <ul>
            {
              this.state.list.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={'/list/' + item.cid}>{item.title}</Link>
                  </li>
                )
              })
            }
        </ul>
      </div>
     );
  }
}
 
export default Index;