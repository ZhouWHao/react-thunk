import React, { Component } from 'react'
import {connect} from 'react-redux';
import {get_user} from '../actions';
import '../App.css'
//将我们刚刚获取到的数据绑定到当前组件的props中来
const mapStateToProps = (state) =>{
    return {
        user:state.user
    }
}
//使用装饰器语法
@connect(mapStateToProps,{get_user})
class User extends Component {
    render() {
        //es6析构变量获取this.props中的数据
        const {get_user} = this.props;
        const {error,isFetching,user} = this.props.user;
        console.log(this.props);
        console.log(this.props.user);
        let data;
        if(error){
            data = error;
            
        }else if(isFetching){
            data = "Loading...";
        }else{
            data = user.email;
        }
        return (
            <div className="bigbutton">
                <h1>{data}</h1>
                <button onClick={()=>get_user()}>GET RANDOM USER</button>
            </div>
        );
    }
}
export default User;