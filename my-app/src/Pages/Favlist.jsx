import React from "react";
import Anime from "../Components/Anime";
import style from "../Pages/Home/Home.module.css";
const Favlist = () => {
  const favlist = JSON.parse(localStorage.getItem("Favlist"));
  console.log(favlist);
  return (
    <>
      <h1>Watch List</h1>
      <div className={style.grid}>
        {favlist.map((e, i) => (
          <Anime {...e} />
        ))}
      </div>
    </>
  );
};

export default Favlist;
