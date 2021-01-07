import React, { Component  } from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom'
import Index from './pages'
import Video from './pages/video'
import Workplace from './pages/workplace'
import './index.css'


class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    let routeConfig = [
      {
        path: '/', title: '首页', exact: true, component: Index
      }, 

      {
        path: '/video/', title: '视频教程', exact: false, component: Video
      }, 

      {
        path: '/workPlace/', title: '职场技能', exact: false, component: Workplace
      }
    ]
    return ( 
        <Router>
          <div className='mainDiv'>
            <div className='leftNav'>
                <h3>一级导航</h3>
                <ul>
                  {
                    routeConfig.map((item, index) => {
                      return (
                        <li key={index}>
                          <Link to={item.path} exact={item.exact}>{item.title}</Link>
                        </li>
                      )
                    })
                  }
                </ul>
            </div>
            <div className='rightMain'>
              {
                routeConfig.map((item, index) => {
                  return (
                    <Route key={index} path={item.path} exact={item.exact} component={item.component}/>
                  )
                })
              }
            </div>
          </div>
        </Router>
     );
  }
}
 
export default AppRouter;