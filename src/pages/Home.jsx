import { useState } from 'react';
import React from "react";
import DishCard from '../components/DishCard';
import dishes from '../dishes.json';
import orders from '../orders.json';
import './home.css';

function Home(){
    const [order, setOrder] = useState([]);
    const [resetQuantities, setResetQuantities] = useState(false);

    const handleQuantityChange = (dish, quantity) => {
        setOrder((prevOrder) => {
            const existingDishIndex = prevOrder.findIndex((item) => item.dish.name === dish.name);

            if (existingDishIndex !== -1) {
                const updatedOrder = [...prevOrder];
                updatedOrder[existingDishIndex] = { ...updatedOrder[existingDishIndex], quantity };
                return updatedOrder.filter(item => item.quantity > 0); 
            } else {
                return quantity > 0 ? [...prevOrder, { dish, quantity }] : prevOrder;
            }
        });
    };

    const handleSubmitOrder = () => {
        if (order.length === 0) {
            alert('Please select at least one item');
            return;
        }

        const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
        existingOrders.push(order);
        localStorage.setItem('orders', JSON.stringify(existingOrders));

        console.log('Order submitted:', order);
        alert('Order has been submitted successfully!');

        window.location.reload();
    };

    const resetOrder = () => {
        setOrder([]); 
        setResetQuantities(true); 
        setTimeout(() => setResetQuantities(false), 100); 
    };


    return (
        <div>
            <h1>Menu</h1>
            {dishes.map((dish, index) => (
                <DishCard dish={dish} key={index} onQuantityChange={handleQuantityChange} />
            ))}

            <h2>Order Summary</h2>
            {order.length === 0 ? (
                <p>No items selected</p>
            ) : (
                <>
                    {order.map((item, index) => (
                        <p key={index}>{item.dish.name} x {item.quantity}</p>
                    ))}
                    <p>Total: ${order.reduce((acc, item) => acc + (item.dish.price * item.quantity), 0).toFixed(2)}</p>
                    <button type='submit' onClick={handleSubmitOrder}>Submit Order</button>
                </>
            )}
        </div>
    );
}

export default Home;
