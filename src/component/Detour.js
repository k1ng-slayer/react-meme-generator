import React, { useState } from "react";
import "../Detour.css";

function Detour() {
    const [isGoingOut, setIsGoingOut] = useState(true);

    function changeMind() {
        setIsGoingOut((prevState) => !prevState);
    }

    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeMind} className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    );
}

export default Detour;
