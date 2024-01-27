import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const BottomNav = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/cart');
        break;
      // Add more cases for other navigation items
      default:
        break;
    }
  };

  return (
    <nav className="bottom-nav">
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
        Cart
      </NavLink>
      <NavLink to="/product-matching" className={({ isActive }) => (isActive ? 'active' : '')}>
        Products
      </NavLink>
      {/* Add more NavLink components as needed */}
    </nav>
  );
}

export default BottomNav;

