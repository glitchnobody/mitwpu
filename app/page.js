import "../styles/globals.css";
import style from "../styles/Allpages.module.scss";
import Image from "next/image";
import Hero from "../public/break.jpg";

export default function Page() {
  return (
    <div>
      <div className={style.hero_home}>
        <div>
          <h1>MIT SOD Gallery</h1>
        </div>
        <Image src={Hero} objectFit="cover" fill alt="logo mitwpu SOD"></Image>
      </div>
    </div>
  );
}
