//默认参数空的对象
const counter = (state = 1, action = {}) => {
    switch (action.type) {
        case 'FINDDATA':
            //throw new Error('error in FINDDATA')
            return state + 10;
        case 'ADDDATA':
            return state + 1;
        default:
            return state;
    }
};
export default  counter;
