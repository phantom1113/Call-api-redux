import React from 'react';
import {Badge, Button} from 'reactstrap';
import { Link } from 'react-router-dom'


class ProductItem extends React.Component {

    onDelete= (id) => {
        if(confirm('Are you sure want to delete item')){ //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        const { product, index } = this.props;
        const statusName = product.status ? 'Stocking' : 'Out of Stock';
        const color = product.status ? 'success' : 'warning'  
        return (
            <tr>
                <th scope="row">{ index + 1 }</th>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <Badge color={color}>{statusName}</Badge>
                </td>
                <td>
                    <Link to={`/product/${product._id}/edit`} className='btn btn-primary'>Update</Link>{' '}
                    <Button color="danger" onClick= { () => {this.onDelete(product._id)}}>Delete</Button>{' '}
                </td>
            </tr>
        );
    }

}

export default ProductItem;
