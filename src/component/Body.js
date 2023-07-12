import React, { useEffect, useState } from "react";
import axios from "axios";
import memesData from "../memesData";

function Body() {
    const [img, setImg] = useState([]);
    const [text, setText] = useState({
        top: "",
        bottom: "",
    });

    const changeImage = () => {
        axios
            .get("https://api.imgflip.com/get_memes")
            .then((response) => {
                const len = response.data.data.memes.length;
                const num = Math.floor(Math.random() * len);
                // console.log(response.data.data.memes[num]);
                setImg(response.data.data.memes[num].url);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleClick = (event) => {
        event.preventDefault();
        changeImage();
    };

    const handleChange = (event) => {
        setText((prevText) => ({
            ...prevText,
            [event.target.name]: event.target.value,
        }));
    };

    useEffect(() => {
        changeImage();
    }, [setImg]);

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
