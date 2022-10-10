import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../Pages/Home/Home.module.css";
const Anime = (e) => {
  const navigate = useNavigate();
  const Favlist = JSON.parse(localStorage.getItem("Favlist")) || [];
  const favlistadd = (obj) => {
    Favlist.push(obj);
    localStorage.setItem("Favlist", JSON.stringify(Favlist));
    alert("Items successfully added in watch list");
  };
  return (
    <div>
      <img alt="animal" src={e.images.jpg.image_url} />
      <h5>
        Title : <span> {e.title}</span>
      </h5>
      <h5>
        Rating : <span> {e.rating}</span>
      </h5>
      <div>
        <button onClick={() => favlistadd(e)} className={style.btn}>
          Add to Watch List
        </button>
        <button onClick={() => navigate(`anime/${e.mail_id}`)}>
          View More Details
        </button>
      </div>
    </div>
  );
};

export default Anime;
