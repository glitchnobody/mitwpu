"use client";
import style from "../styles/Menu.module.scss";
import Image from "next/image";
import logo from "../public/logo_menu.png";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({ children }) {
  return (
    <body>
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
                style={{
                  objectFit: "contain",
                  objectPosition: "center left",
                }}
                src={logo}
                fill
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
            <Link href="/">
              <li style={{ marginLeft: "3px" }}>Home |</li>
            </Link>
            <Link href="/ProductDesign">
              <li>Product Design</li>
            </Link>
            <Link href="/UserExperience">
              <li>User Experience</li>
            </Link>
            <Link href="/VisualCommunication">
              <li>Visual Communication</li>
            </Link>
            <Link href="/FashionandAparell">
              <li>Fashion and Aparell</li>
            </Link>
            <Link href="/JewelryDesign">
              <li>Jewelry Design</li>
            </Link>
            <Link href="/InteriorDesign">
              <li>Interior Design</li>
            </Link>
            <Link href="/OtherWork">
              <li>Other Work</li>
            </Link>
          </ul>
        </div>
      </nav>
      <section>{children}</section>
    </body>
  );
}
