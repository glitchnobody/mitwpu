import "../styles/globals.css";
import style from "../styles/Allpages.module.scss";
import Hero from "../public/break.jpg";
import Photo from "../components/Photo.js";
import Image from "next/image";
import p1 from "./p1.jpeg";
import p2 from "./p2.jpeg";
import p3 from "./p3.jpeg";
import p4 from "./p4.jpeg";
import p5 from "./p5.jpeg";
import p6 from "./p6.jpeg";
import p7 from "./p7.jpeg";
import p8 from "./p8.png";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className={style.hero_home}>
        <div>
          <h1>MIT SOD Gallery</h1>
        </div>
        <Image
          style={{
            objectFit: "cover",
          }}
          src={Hero}
          fill
          alt="logo mitwpu SOD"
        ></Image>
      </div>
      <div className={style.display_grid_container}>
        <div className={style.display_grid}>
          <Photo
            src={p1}
            by="Shannon Andersen"
            dep="FY UX"
            name="lorem Ipsum"
          />
          <Photo src={p2} by="Del Drake" dep="SY VC" name="lorem Ipsum" />
          <Photo src={p3} by="Howard Mathews" dep="FY UX" name="lorem Ipsum" />
          <Photo
            src={p4}
            by="Beatrice Johnson"
            dep="SY VC"
            name="lorem Ipsum"
          />
          <Link href="/psroh">
            <Photo src={p5} by="Sonny Stevens" dep="TY PD" name="lorem Ipsum" />
          </Link>
          <Photo src={p6} by="Tyler Lucero" dep="FNY VC" name="lorem Ipsum" />
          <Photo
            src={p7}
            by="Cedric Mooney"
            dep="TY Fashion"
            name="lorem Ipsum"
          />
          <Photo
            src={p8}
            by="Sharlene Huffman"
            dep="FNY Fashion"
            name="lorem Ipsum"
          />
        </div>
      </div>
    </div>
  );
}
