import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import FeaturedItem from './components/FeaturedItem';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import ProductMatchingPage from './components/ProductMatchingPage';
import './App.css';
// Other imports


const App = () => {

  const mockFeaturedItems = [
    { id: 1, name: 'Item 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Item 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Item 3', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Item 4', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Item 5', imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Item 6', imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Item 7', imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Item 8', imageUrl: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Item 9', imageUrl: 'https://via.placeholder.com/150' }
  ];
  

  return (
    <Router>
      <div>
        <h1>Featured Items</h1>
        <Grid container spacing={2}>
          {mockFeaturedItems.slice(0, 9).map(item => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <FeaturedItem item={item} />
            </Grid>
          ))}
        </Grid>
        <BottomNav />
      </div>
    </Router>

  );
};

export default App;
