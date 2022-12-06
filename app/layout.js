import style from "../styles/Menu.module.scss";
import Image from "next/image";
import logo from "../public/logo_menu.png";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <nav>
        <div
          style={{
            background: "#000",
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#000",

              height: "68px",
              display: "flex",
              width: "95%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className={style.logo}>
              <Image
                src={logo}
                fill
                objectFit="contain"
                objectPosition="center left"
                alt="logo mitwpu SOD"
              ></Image>
            </div>
            <div className={style.submit}>
              <button>Submit Work</button>
            </div>
          </div>
        </div>
        <div className={style.stream}>
          <ul>
            <li style={{ marginLeft: "3px" }}>Home |</li>
            <li>Product Design</li>
            <li>User Experience</li>
            <li>Visual Communication</li>
            <li>Fashion and Aparell</li>
            <li>Jewelry Design</li>
            <li>Interior Design</li>
          </ul>
        </div>
      </nav>
      <section>{children}</section>
    </html>
  );
}
