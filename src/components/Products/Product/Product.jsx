import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import React from 'react';
import useStyles from './style';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography dangeriouslySetInnerHTML={{ __html: product.drescription }} variant="body2" color="textSecondary" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={onAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card >
  )
}

export default Product
