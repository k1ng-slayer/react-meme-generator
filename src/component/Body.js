import React, { useState } from "react";
import axios from "axios";

function Body() {
    const [image, setImage] = useState();

    const handleClick = () => {
        axios
            .get("https://picsum.photos/640/360")
            .then((response) => {
                console.log(".then() executed", response);
                setImage(response);
            })
            .catch((error) => {
                console.log(error);
                console.log(".catch() executed", error);
            });
    };

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
                <button className="form-button" onClick={handleClick}>
                    Get a new meme image 🖼
                </button>
            </form>
            <img src={image} alt="random-pic" />
        </main>
    );
}

export default Body;
