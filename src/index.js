import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
//基于redux的第三方监听状态日志消息中间件
import logger from 'redux-logger';
//基于redux的第三方处理action的异步操作中间件
import thunk from 'redux-thunk';
//简化操作返回状态的action代码的中间件
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import './index.css';
import App from './App';
/**
 * 主要是用于在生产环境中为用户在本地创建一个service worker 来缓存资源到本地，
 * 提升应用的访问速度
 */
import * as serviceWorker from './serviceWorker';

// import { findData } from './actions';
import { Provider } from 'react-redux';
//开始构造Store
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(logger, thunk, promise))
);
//<Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store。
//正常情况下，你的根组件应该嵌套在 <Provider> 中才能使用 connect() 方法。
const render = () =>{
    ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    document.getElementById('root'));
};
render();
//给store注册监听器，每当 dispatch action 的时候就会执行一次
// store.subscribe(render);
serviceWorker.unregister();
