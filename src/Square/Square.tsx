import React from 'react';

interface SquareProps {
    hasItem: boolean;
    clicked:boolean;
}


const Square: React.FC<SquareProps> = props => {
    const squareClass = `square ${props.clicked ? 'clicked' : ''}`;

    const getItem = () => {
        if (props.hasItem && props.clicked) {
            return <div>O</div>
        }
            };
    return (
        <div className={squareClass} >
            {getItem()}
        </div>
    );
};

export default Square;