import React from 'react';
import {Link,  Route} from 'react-router-dom'
import Money from './workplace/money'
import Getup from './workplace/getup'

export default function Video () {
  return (
    <div>
        <div className='topNav'>
          <ul>
            <li><Link to='/workPlace/money/'>加薪秘籍</Link></li>
            <li><Link to='/workPlace/getup/'>早起教程</Link></li>
          </ul>
        </div>
        <div className='workPlaceContent'>
            <Route path='/workPlace/money/' component={Money} />
            <Route path='/workPlace/getup/' component={Getup} />
        </div>
    </div>
  );
}