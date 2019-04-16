import axios from 'axios';
import {FINDDATA,ADDDATA,LOAD_USER} from '../constants'
export const  findData = () => {
    //返回对象
    // return {
    //     type:FINDDATA,
    // }
    //返回函数
    // return dispatch => {
    //     setTimeout(() => {
    //         dispatch({
    //             type:FINDDATA
    //         })
    //     }, 2000);
    // };
    return {
        type:FINDDATA,
        //Promise表示一个异步操作的最终状态（完成或失败），以及其返回的值。
        //Promise就是能把原来的回调写法分离出来，在异步操作执行完后，用链式调用的方式执行回调函数。
        payload:new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("rails365");
            });
        })
    }
}
export const  addData = () => {
    return {
        type:ADDDATA,
    }
}
export const get_user = () =>{
    // return dispatch =>{
    //     dispatch(fetch_user_request())
    //     axios.get("https://randomuser.me/api/")
    //     .then(res => {
    //         dispatch(fetch_user(res.data.results[0]));
    //     })
    //     .catch(error=>{
    //         dispatch(fetch_user_failure(error.response.data));
    //     });
    // };
    return{
                                                                                       //成功       //失败     //加载中
        type:LOAD_USER,//根据我们自己type,redux-promise-middleware会帮我们衍生出三种状态，//_FULFILLED//_REJECTED//_PENDING
        //payload:axios.get("https://randomuser.me/api/")
        //第二种写法
        payload:{
            promise:axios.get("https://randomuser.me/api/")
        }
    }
};
//使用redux-promise-middleware可以省略下面三种操作的action
// export const fetch_user_failure = (error) =>{
//     return {
//         type:FETCH_USER_FAILURE,
//         error:error
//     }
// }
// export const fetch_user = (user) =>{
//     return{
//         type:FETCH_USER_SUCCESS,
//         user
//     };
// };
// export const fetch_user_request = () =>{
//     return {
//         type:FETCH_USER_REQUEST
//     }
// }