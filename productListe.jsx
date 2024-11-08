
import React from 'react';
import Product from './product.jsx';

const ProductList = ({ products, addToCart }) => (
  <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-12 mb-3" key={product.id}>
            <div className="card d-flex flex-column align-items-start p-3">
              <img src={product.image} className="card-img-top mb-2" alt={product.name} style={{ width: '150px', height: '150px' }} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
);

export default ProductList;
