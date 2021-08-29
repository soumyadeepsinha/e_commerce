import { Grid } from '@material-ui/core';
import React from 'react';
import Product from './Product/Product';


const products = [
  { id: '1', name: 'Bags', description: 'Laptop Bag', image: 'https://5.imimg.com/data5/MB/CL/MY-5529291/laptop-bag-500x500.jpg', price: '15' },
  { id: '2', name: 'Mobile Case', description: 'Apple 12 Back Case', image: 'https://5.imimg.com/data5/SELLER/Default/2021/1/WW/LX/QN/73492954/rainbow-cases-500x500.jpg', price: '10' },
  { id: '3', name: 'Jacket', description: 'Leather Jacket for Men', price: '25', image: 'https://gearmoose.com/wp-content/uploads/2019/11/Best-Mens-Leather-Jackets.jpg' }
]

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main >
  )
}

export default Products;