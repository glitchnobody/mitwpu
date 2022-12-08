import "../../styles/globals.css";
import style from "../../styles/Allpages.module.scss";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className={style.hero_home}>
        <div>
          <h1>Flamingo Bottle</h1>
        </div>
      </div>
      <div className={style.display_grid_container}>
        <iframe
          src="https://drive.google.com/file/d/1AQ5-r0FYPu3us1qm4pgx8fGtSZzyH37d/preview"
          width="100%"
          height="700px"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
}
