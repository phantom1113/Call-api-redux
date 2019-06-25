import React from 'react';
import {
  Table,
  Card, CardHeader,CardBody
} from 'reactstrap';



class ProductList extends React.Component {
  render() {
    return (
        <Card>
            <CardHeader>LIST PRODUCT</CardHeader>
            <CardBody>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Seq</th>
                            <th>ID</th>
                            <th>Name Product</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.children }
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
  }

}

export default ProductList;
