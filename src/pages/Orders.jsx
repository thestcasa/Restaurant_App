import React from 'react';
import orders from '../orders.json'; 

const Orders = () => {
  if (!orders || orders.length === 0) {
    return <h2 style={{ padding: '20px', textAlign: 'center' }}>No orders available</h2>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Orders</h1>
      {orders.map((order) => (
        <div key={order.orderId} style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', borderRadius: '8px' }}>
          <h2>Order #{order.orderId}</h2>
          <h3>Dishes:</h3>
          <ul>
            {order.dishes.map((dish, index) => (
              <li key={index}>
                <p><strong>Dish:</strong> {dish.name}</p>
                <p><strong>Quantity:</strong> {dish.quantity}</p>
                <p><strong>Price:</strong> ${dish.price.toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <p><strong>Total Price:</strong> ${order.totalPrice.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
