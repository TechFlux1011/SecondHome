import * as React from 'react';
import Grid from '@mui/material/Grid';
import ProductItem from './ProductItem';
// Other imports

const ProductMatchingPage = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    // Fetch products and set state
  }, []);

  return (
    <Grid container spacing={2}>
      {products.map(product => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductMatchingPage;

