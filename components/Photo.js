import React from "react";
import style from "../styles/Allpages.module.scss";
import Image from "next/image";

export default function Photo(props) {
  return (
    <div className={style.display_grid_img_info}>
      <div className={style.display_grid_info}>
        <p>
          {props.name}
          <b> By </b>
          {props.by}
        </p>
        <p style={{ marginBottom: "20px" }}>
          <b>Depatment - </b>
          {props.dep}
        </p>
      </div>
      <div className={style.display_grid_img}>
        <Image
          style={{
            borderRadius: "10px",
            objectFit: "cover",
          }}
          fill
          src={props.src}
          alt={props.alt}
        ></Image>
      </div>
    </div>
  );
}
