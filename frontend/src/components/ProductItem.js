import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ProductItem = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.imageUrl} // Replace with your image URL
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Button variant="contained">Match</Button>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
