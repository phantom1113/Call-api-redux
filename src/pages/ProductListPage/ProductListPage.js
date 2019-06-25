import React from 'react';
import {Row, Col} from 'reactstrap'
import ProductList from './../../components/ProductList/ProductList'
import ProductItem from './../../components/ProductItem/ProductItem'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/index';

class ProductListPage extends React.Component {
  componentDidMount() {
    // callApi('books','GET',null).then(res => {
    //     // this.setState({
    //     //     products: res.data.records
    //     // });
    //     this.props.fetchAllProducts(res.data.records);
    // });
    this.props.fetchAllProducts();
  }
  
  onDelete = (id) => {
      // const { products } = this.state;
      // console.log(products);
      // callApi(`books/${id}`,'DELETE', null).then(res => {
      //     console.log(res.status);
      //     if(res.status === 200){
      //         const index = this.findIndex(products,id);
      //         console.log(index);
      //         if(index !== -1){
      //           products.splice(index,1)
      //           this.setState({
      //             products : products
      //           });
      //         }
      //     }
      // });
      this.props.onDeleteProduct(id)
  }



  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <div>
        <Row className='pb-2 pt-2'>
          <Col>
            <Link to="/product/add" className="btn btn-primary" color="primary">Add Product</Link>{' '}
          </Col>
        </Row>
        <Row>
          <Col>
            <ProductList>
                { this.showProducts(products)  }
            </ProductList>
          </Col>
        </Row>
      </div>
    );
  }
  showProducts = (products) => {
    var result = null;
    if(products.length > 0){
      result = products.map((product, index) => {
          return (
            <ProductItem
                key={index}
                product={product}
                index={index}
                onDelete= {this.onDelete}
                />
          );
      })
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    products : state.products
  }
}

const mapDispatchToProps= (dispatch, props) => {
  return {
    fetchAllProducts : () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);
