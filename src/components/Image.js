
import React from 'react';
import { product } from './../product';

function Image() {
  return <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />;
}

export default Image;
