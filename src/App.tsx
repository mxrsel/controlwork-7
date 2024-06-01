import React, { useState } from 'react';
import MenuItems from "./lib/components/MenuItems.tsx";
import OrderDetails from "./lib/components/OrderDetails.tsx";


const App: React.FC = () => {
    const [order, setOrder] = useState<{ name: string; amount: number; price: number }[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const menuItems = [
        { name: 'Hamburger', price: 80 },
        { name: 'Cheeseburger', price: 90 },
        { name: 'French Fries', price: 50 },
        { name: 'Coke', price: 30 },
        { name: 'Chicken Nuggets', price: 100 },
        { name: 'Salad', price: 70 },
    ];

    const addItem = (item: { name: string; price: number }) => {
        const index = order.findIndex(orderItem => orderItem.name === item.name);
        if (index !== -1) {
            const updatedOrder = [...order];
            updatedOrder[index].amount++;
            setOrder(updatedOrder);
        } else {
            const newItem = { ...item, amount: 1 };
            setOrder([...order, newItem]);
        }
        setTotalPrice(prevPrice => prevPrice + item.price);
    };

    const removeItem = (index: number) => {
        const removedItem = order[index];
        setOrder(prevOrder => {
            const updatedOrder = [...prevOrder];
            updatedOrder.splice(index, 1);
            return updatedOrder;
        });
        setTotalPrice(prevPrice => prevPrice - removedItem.price * removedItem.amount);
    };

    return (
        <div className="app">
            <MenuItems items={menuItems} addItem={addItem} />
            <OrderDetails order={order} total={totalPrice} removeItem={removeItem} />
        </div>
    );
};

export default App;