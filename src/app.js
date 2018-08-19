import React, {Component} from 'react';
import { Modal, Button } from 'antd';
import config from './config.json';
import { hot } from 'react-hot-loader';
import Divider from 'antd/lib/divider';
import './app.less';

class App extends Component{
  constructor(props) {
    super(props);
  }
  //es7新特性
  state = {
    visible: false,
  }
  render = () => {
    return (
      <div>这是一份简历哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
    );
  }
}

export default hot(module)(App);

