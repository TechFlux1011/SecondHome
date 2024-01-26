import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
      {/* Add other navigation actions */}
    </BottomNavigation>
  );
};

export default BottomNav;

