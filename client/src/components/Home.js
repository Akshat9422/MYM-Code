import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header1 from "./Header1";
import "./Home.css";
import { BsRocket } from "react-icons/bs";

const Home = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(
    "Ola !! Click The Spaceship Below To Explore..."
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 70);
    }
  }, [index]);

  return (
    <>
      <Header1 />

      <div className="home">
        <div className="content">
          <h2 className="ola">{text}</h2>

          <Link className="home-link" to="/nasaphoto">
            <BsRocket />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
