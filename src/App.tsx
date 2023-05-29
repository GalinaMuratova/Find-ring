import React, { useState } from 'react';
import './App.css';
import Square from "./Square/Square";
import ResetBtn from "./ResetBtn/ResetBtn";
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
    const [tries, setTries] = useState(0);

    const onClickItem = (index:number) => {
        if (!items[index].clicked) {
            const newItems = [...items];
            newItems[index].clicked = true;
            setItems(newItems);
            setTries(tries + 1);
        }
    };

    const reset = () => {
        setItems(createPlayGround());
        setTries(0);
    };

    return (
        <div className="App">
            <div className="board">
                {items.map((item, index) => (
                    <Square
                        key={index}
                        hasItem={item.hasItem}
                        clicked={item.clicked}
                        onClick={() => onClickItem(index)}
                    />
                ))}
            </div>
            <h3>Tries: {tries}</h3>
            <ResetBtn onclick={reset}/>
        </div>
    );
};

export default App;


