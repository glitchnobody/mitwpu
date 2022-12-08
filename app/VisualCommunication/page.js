import "../../styles/globals.css";
import style from "../../styles/Allpages.module.scss";
import Image from "next/image";
import Hero from "../../public/break.jpg";
import Photo from "../../components/Photo.js";
import p1 from "./p1.jpeg";
import p2 from "./p2.jpeg";
import p3 from "./p3.jpeg";
import p4 from "./p4.jpeg";
import p5 from "./p5.jpeg";
import p6 from "./p6.jpeg";
import p7 from "./p7.jpeg";
import p8 from "./p8.png";

export default function Page() {
  return (
    <div>
      <div className={style.hero_home}>
        <div>
          <h1>Visual Communication</h1>
        </div>
        <Image
          style={{
            objectFit: "cover",
            filter: " grayscale(100%)",
          }}
          src={p4}
          fill
          alt="logo mitwpu SOD"
        ></Image>
      </div>
      <div className={style.display_grid_container}>
        <div className={style.display_grid}>
          <Photo
            src={p1}
            by="Shannon Andersen"
            dep="FY VC"
            name="lorem Ipsum"
          />
          <Photo src={p2} by="Del Drake" dep="SY VC" name="lorem Ipsum" />
          <Photo src={p3} by="Howard Mathews" dep="FY VC" name="lorem Ipsum" />
          <Photo
            src={p4}
            by="Beatrice Johnson"
            dep="SY VC"
            name="lorem Ipsum"
          />
          <Photo src={p5} by="Sonny Stevens" dep="TY VC" name="lorem Ipsum" />
          <Photo src={p6} by="Tyler Lucero" dep="FNY VC" name="lorem Ipsum" />
          <Photo src={p7} by="Cedric Mooney" dep="TY VC" name="lorem Ipsum" />
          <Photo
            src={p8}
            by="Sharlene Huffman"
            dep="FNY VC"
            name="lorem Ipsum"
          />
        </div>
      </div>
    </div>
  );
}
