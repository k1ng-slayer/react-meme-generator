import React, { useState } from "react";
import memesData from "../memesData";

function Body() {
    const [num, setNum] = useState(49);
    const [text, setText] = useState({
        top: "",
        bottom: "",
    });

    const img = memesData.data.memes[num].url;
    const len = memesData.data.memes.length;

    const handleClick = (event) => {
        event.preventDefault();
        setNum(Math.floor(Math.random() * len));
        console.log(num);
        console.log(text);
    };

    const handleChange = (event) => {
        setText((prevText) => ({
            ...prevText,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <main>
            <form className="text-form">
                <input
                    type="text"
                    placeholder="Top text"
                    name="top"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    name="bottom"
                    onChange={handleChange}
                />
                <button className="form-button" onClick={handleClick}>
                    Get a new meme image
                </button>
            </form>
            <div className="meme">
                <img src={img} alt="random-pic" />
                <div className="text-top">{text.top}</div>
                <div className="text-bottom">{text.bottom}</div>
            </div>
        </main>
    );
}

export default Body;

// https://picsum.photos/640/360
