import React, { useState } from "react";
import memesData from "../memesData";

function Body() {
    const [meme, setMeme] = useState("");

    return (
        <main>
            <form className="text=form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                />
                <button className="form-button">Get a new meme image 🖼</button>
            </form>
            <img src={meme} alt="random-pic" />
        </main>
    );
}

export default Body;
