import React, { useState } from 'react';
import './App.css';
import Square from "./Square/Square";
const createPlayGround = () => {
    const items = [];
    for (let i = 0; i < 36; i++) {
        items.push({ hasItem: false, clicked: false });
    }
    const random = Math.floor(Math.random() * 36);
    items[random].hasItem = true;
    return items;
};

const App = () => {
    const [items, setItems] = useState(createPlayGround());


    return (
        <div>
            <div className="board">
                {items.map((item, index) => (
                    <Square
                        key={index}
                        hasItem={item.hasItem}
                        clicked={item.clicked}
                    />
                ))}
            </div>
            <h4>Attempts: </h4>
            <button>Reset</button>
        </div>
    );
};

export default App;


