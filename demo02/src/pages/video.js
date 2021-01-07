import React from 'react';
import {Link,  Route} from 'react-router-dom'
import ReactPage from './video/reactPage'
import Flutter from './video/flutter'
import Vue from './video/vue'

export default function Video () {
  return (
    <div>
        <div className='topNav'>
          <ul>
            <li><Link to='/video/react/'>react 教程</Link></li>
            <li><Link to='/video/vue/'>vue 教程</Link></li>
            <li><Link to='/video/flutter/'>flutter 教程</Link></li>
          </ul>
        </div>
        <div className='videoContent'>
            <Route path='/video/react/' component={ReactPage} />
            <Route path='/video/vue/' component={Vue} />
            <Route path='/video/flutter/' component={Flutter} />
        </div>
    </div>
  );
}