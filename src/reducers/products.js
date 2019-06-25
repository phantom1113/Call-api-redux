import * as Types from './../constants/ActionTypes';
const initialState = [];

const products = (state = initialState, action) => {
    let index = -1;
    const { _id, product } = action;
    switch(action.type){
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(state, _id);
            state.splice(index,1);
            return [...state];
        case Types.UPDATE_PRODUCT:
            index = findIndex(state,product._id)
            state[index] =product
            return [...state];
        default: return [...state];
    }
};

const findIndex = (products, id) => {
    var result = -1;
    products.forEach((product,index) => {
        if(product._id === id){
          result = index;
        }
    });
    return result;
  }
export default products;