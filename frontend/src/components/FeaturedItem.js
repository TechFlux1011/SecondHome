import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const FeaturedItem = ({ item }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={item.imageUrl} // Replace with your image URL
        alt={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        {/* Add more item details if needed */}
      </CardContent>
    </Card>
  );
};

export default FeaturedItem;
