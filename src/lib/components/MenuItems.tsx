import React from "react";

interface MenuItem {
    name: string;
    price: number;
}

interface MenuItemsProps {
    items: MenuItem[];
    addItem: (item: MenuItem) => void;
}

const MenuItems: React.FC<MenuItemsProps> = ({ items, addItem }) => {
    return (
        <div className="menu-items">
            <h2>Add items</h2>
            {items.map((item, index) => (
                <button key={index} onClick={() => addItem(item)}>
                    {item.name} - {item.price} som
                </button>
            ))}
        </div>
    );
};

export default MenuItems;