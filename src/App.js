import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  {connect} from 'react-redux';
import './App.css';
// import {findData,addData} from './actions';
import * as types from './actions';//希望传入所有action的时候
import { bindActionCreators } from 'redux';
import User from './components/user';
//mapStateToProps方法允许我们将store中的数据作为props绑定到组件中，
//只要store更新了就会调用mapStateToProps方法
const mapStateToProps = (state) => {
  return {
    counter:state.counter
  }
}
//告诉我们的组件需要如何触发 dispatch
//和 mapStateToProps 一样，它返回一个对象，这个对象内容会同样被 connect 当作是 props 参数传给被包装的组件。
//不一样的是，这个函数不是接受 state 作为参数，而是 dispatch，
//你可以在返回的对象内部定义一些函数，这些函数会用到 dispatch 来触发特定的 action。
const mapDispatchToProps = (dispatch) =>{
  //不使用bindActionCreators写法
  // return{
  //   findData:(name)=>{dispatch(findData(name))};
  // }
  //bindActionCreators用法一般建议传给子组件的时候才用
  //却不想让这个子组件觉察到 Redux 的存在，
  //而且不希望把 dispatch 或 Redux store 传给它
  //写法一
  // return{
  //   findData:bindActionCreators(findData,dispatch);
  // }
  //写法二
  return bindActionCreators(types,dispatch);
}
//create-react-app脚手架搭建的项目默认不支持es6装饰器的语法
//@connect就是一个修饰器。它修改了App这个类的行为，为它加上了静态connect操作。
//connect函数的参数是App类本身。所以@connect(mapStateToProps,mapDispatchToProps)等同于connect(mapStateToProps,mapDispatchToProps)(App);
//引入装饰器
@connect(mapStateToProps,mapDispatchToProps)
class App extends Component {
  static propTypes = {
    counter:PropTypes.number.isRequired,
    findData:PropTypes.func.isRequired,
    addData:PropTypes.func.isRequired
  };
  render() {
    const {findData,addData} = this.props;
    // const {dispatch} = this.props;
    // setTimeout(()=>{
    //   dispatch({type...})
    // },5000);
    return (
      <div className="container">
        <h1 style={{textAlign:"center"}}>{this.props.counter}</h1>
        <div>
          <button onClick = {()=>findData()}>add</button>
          <button onClick = {()=>addData()}>del</button>
        </div>
        <User/>
      </div>
    );
  }
}
//传入当前组件的类型验证
// App.propTypes = {

// }
//如果你想在某个子组件中使用Redux维护的store数据，
//它必须是包裹在Provider中并且被connect过的组件，Provider的作用类似于提供一个大容器，
//将组件和Redux进行关联，在这个基础上，connect再进行store的传递。
// export default connect(mapStateToProps,mapDispatchToProps)(App);
//不定义mapDispatchToProps最简便用法，直接传入action对象
//export default connect(mapStateToProps,{findData,addData})(App);
export default App;