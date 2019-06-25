import React from 'react';
import { Route, Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap';

const menus = [
  {
    name:"Home",
    to: '/',
    exact: true
  },
  {
    name: 'Product Manage',
    to: '/product-list',
    exact: false
  }
];

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return(
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({match}) => {
          const active = match ? 'nav-item active' : 'nav-item'
          return (
              <li className={active}>
                <Link className="nav-link" to={to}>{label}</Link>
              </li>
          )
      }}
    />
  );
}

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar color="light" light expand="md">
          <NavbarBrand>Online Store</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                {this.showMenus(menus)}
              </Nav>
          </Collapse>
        </Navbar>
    );
  }

  showMenus = (menus) => {
    let result = null;
    if(menus.length > 0){
      result = menus.map((menu,index) => {
        return (
          <MenuLink
              key={index}
              label={menu.name}
              to={menu.to}
              activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  }

}

export default Menu;
