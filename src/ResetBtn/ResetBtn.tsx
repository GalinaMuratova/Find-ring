import React from 'react';

interface ResetProps {
    onclick: React.MouseEventHandler;
}
const ResetBtn: React.FC<ResetProps> = props => {
    return (
        <button className="reset-btn" onClick={props.onclick}>Reset</button>
    );
};

export default ResetBtn;