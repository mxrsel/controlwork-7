import React from "react";

interface OrderItem {
    name: string;
    amount: number;
    price: number;
}

interface OrderProps {
    order: OrderItem[];
    total: number
    removeItem: (index: number) => void
}

const OrderDetails: React.FC<OrderProps> = ({ order, total,  removeItem }) => {
    return (
        <div className="order-details">
            <h2>Order Details</h2>
            {order.length === 0 ? (
                <p>No items in the order</p>
            ) : (
                <div>
                    {order.map((item, index) => (
                        <div key={index}>
                            <p>
                                {item.name} x{item.amount} - {item.price * item.amount} KGS
                                <button onClick={() => removeItem(index)}>Remove</button>
                            </p>
                        </div>
                    ))}
                    <p>Total price: {total} KGS</p>
                </div>
            )}
        </div>
    );
}

export default OrderDetails;