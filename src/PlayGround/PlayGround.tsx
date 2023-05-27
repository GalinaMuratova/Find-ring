import React from 'react';

const PlayGround = () => {

    const createPlayGround = () => {
        const element = [];
        for (let i = 0; i < 36; i++) {
            element.push({hasItem: false, clicked: false});
        }
        const random = Math.floor(Math.random() * 36);
        element[random].hasItem = true;
        console.log(element);
        return element;
    };

    return (
        <div>
            <button onClick={createPlayGround}>Click</button>
        </div>
    );
};

export default PlayGround;