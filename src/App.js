import React from 'react';
import {
  Container
} from 'reactstrap';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import routes from './routes';
import Menu from './components/Menu/Menu'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Container>
            {/* <Row className='pb-2 pt-2'>
            <Col>
              <Button color="primary">Add Product</Button>{' '}
            </Col>
          </Row>
          <Row>
            <Col>
              <ProductList/>
            </Col>
          </Row> */}
            {this.showContentMenus(routes)}
          </Container>
        </div>
      </Router>
    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (<Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />);
      });
    }
    return <Switch>{result}</Switch>;
  }
}

export default App;
