import "../styles/globals.css";
import style from "../styles/Allpages.module.scss";
import Hero from "../public/break.jpg";
import Photo from "../components/Photo.js";
import Image from "next/image";

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
          <Photo src={Hero} by="John Doe" dep="FY UX" name="clouds" />
          <Photo src={Hero} by="John Doe" dep="FY UX" name="clouds" />
          <Photo src={Hero} by="John Doe" dep="FY UX" name="clouds" />
          <Photo src={Hero} by="John Doe" dep="FY UX" name="clouds" />
          <Photo src={Hero} by="John Doe" dep="FY UX" name="clouds" />
          <Photo src={Hero} by="John Doe" dep="FY UX" name="clouds" />
          <Photo src={Hero} by="John Doe" dep="FY UX" name="clouds" />
          <Photo src={Hero} by="John Doe" dep="FY UX" name="clouds" />
        </div>
      </div>
    </div>
  );
}
