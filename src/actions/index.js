import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProductsRequest = () => {
    console.log('actFetchProductRequest');
    return dispatch => {
        return callApi('books', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data.records))
        });
    }
}

export const actFetchProducts = products => {
    console.log('actFetchProduct');
    return {
        type:Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = id => {
    return dispatch => {
        return callApi(`books/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteProduct(id));
        });
    }
}

export const actDeleteProduct = id => {
    return {
        type : Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = (product) => {
    console.log('actAddProductRequest');
    return dispatch => {
        return callApi('books', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        });
    }
}

export const actAddProduct = product => {
    console.log('actAddProduct');
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actGetProductRequest = id => {
    return dispatch => {
        return callApi(`books/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data));
        });
    }
}

export const actGetProduct = product => {
    return{
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = product => {
    console.log(product);
    return dispatch => {
        return callApi(`books/${product._id}`, 'POST', product).then(res => {
            dispatch(actUpdateProduct(res.data));
        });
    }
}

export const actUpdateProduct = product => {
    return { 
       type: Types.UPDATE_PRODUCT,
       product
    }
}