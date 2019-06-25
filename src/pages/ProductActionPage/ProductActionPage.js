import React from 'react';
import {Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { actAddProductRequest,  actGetProductRequest, actUpdateProductRequest } from './../../actions/index';
import { connect } from 'react-redux';



class ProductActionPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            _id: '',
            txtname: '',
            txtprice: '',
            chstatus: ''
        }
    }
    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    onSave = (e)  => {
        e.preventDefault();
        const {_id, txtname, txtprice, chstatus} = this.state;
        const { history } = this.props;
        console.log(_id);
        const product = {
            _id: _id,
            name: txtname,
            price: txtprice,
            status: chstatus
        }
        if(product._id){
            // callApi(`books/${product.id}`, 'POST',{
            //     name:txtname,
            //     price: txtprice,
            //     status: chstatus
            // }).then(res => {
            //     history.goBack();
            // })
            this.props.onUpdateProduct(product);
        }else{
            // callApi('books','POST',{
            //     name: txtname,
            //     price: parseInt(txtprice),
            //     status: chstatus
            // }).then(res => {
            //     history.goBack();
            // }).catch(err =>{
            //     console.log(err);
            // });
            this.props.onAddProduct(product);
        }
        history.goBack();
    }
    componentDidMount(){
        const { match } = this.props;
        if(match){
            const id = match.params.id;
            // callApi(`books/${id}`, 'GET', null).then(res => {
            //     const data = res.data;
            //     this.setState({
            //         id: data._id,
            //         txtname: data.name,
            //         txtprice: data.price,
            //         chstatus : data.status
            //     });
            // });
            this.props.onEditProduct(id);
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            const { itemEditing } = nextProps;
            this.setState({
                _id: itemEditing._id,
                txtname: itemEditing.name,
                txtprice: itemEditing.price,
                chstatus: itemEditing.status
            });
        }
    }

    render() {
        const { txtname, txtprice, chstatus} = this.state;
        return (
            <div>
                <Form onSubmit={this.onSave}>
                    <FormGroup>
                        <Label for="productname">Product Name:</Label>
                        <Input type="text" name="txtname" value={txtname} onChange={this.onChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Price:</Label>
                        <Input type="text" name="txtprice" value={txtprice} onChange={this.onChange}/>
                    </FormGroup>
                    <FormGroup row>
                        <Col xs="2">
                            <Label check>Status:</Label>
                        </Col>
                        <Col xs="2">
                            <Input type="checkbox" name="chstatus" value={chstatus} onChange={this.onChange} checked={chstatus}/>{' '}
                            Stocking                       
                        </Col>
                    </FormGroup>
                    <Button color='primary'>Submit</Button>
                    <Link to="/product-list" className="btn btn-danger ml-2">
                        Back
                    </Link>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itemEditing : state.itemEditing
    }
}

const mapDispatchTpProps = (dispatch, props) => {
    return {
        onAddProduct: product => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: id => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: product => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps,mapDispatchTpProps)(ProductActionPage);
