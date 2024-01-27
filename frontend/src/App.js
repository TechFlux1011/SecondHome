import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import FeaturedItem from "./components/FeaturedItem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import ProductMatchingPage from "./components/ProductMatchingPage";
import Cart from "./components/Cart";
import "./App.css";
// Other imports

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeaturedItems />} />
        <Route path="/product-matching" element={<ProductMatchingPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <BottomNav />
    </Router>
  );
};

const FeaturedItems = () => {
  const mockFeaturedItems = [
    { id: 1, name: "Item 1", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, name: "Item 2", imageUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "Item 3", imageUrl: "https://via.placeholder.com/150" },
    { id: 4, name: "Item 4", imageUrl: "https://via.placeholder.com/150" },
    { id: 5, name: "Item 5", imageUrl: "https://via.placeholder.com/150" },
    { id: 6, name: "Item 6", imageUrl: "https://via.placeholder.com/150" },
    { id: 7, name: "Item 7", imageUrl: "https://via.placeholder.com/150" },
    { id: 8, name: "Item 8", imageUrl: "https://via.placeholder.com/150" },
    { id: 9, name: "Item 9", imageUrl: "https://via.placeholder.com/150" },
  ];

}

export default App;
