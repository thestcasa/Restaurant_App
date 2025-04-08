import React, { useState } from 'react';

const DishCard = ({ dish, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(0);

    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value, 10) || 0;
        setQuantity(value);
        onQuantityChange(dish, value);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '300px' }}>
            <img src={dish.image} alt={dish.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <p>Price: ${dish.price}</p>
            <p>Quantity <input type="number" value={quantity} min="0" onChange={handleQuantityChange} /></p>
        </div>
    );
};

export default DishCard;
