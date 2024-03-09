import "./index.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); // プラグイン登録
import { TextAnimator } from "./js/libs/functions.js";
const el = new TextAnimator(".spanWrapText");
el.spanWrapText2();

export function createTextLineAnimation(typeClass, el, start = "50% 50%") {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: start,
      markers: true,
    },
  });
  // `.js-container-1` の場合に特別な処理を行う
  if (typeClass === ".js-container-1") {
    tl.from(`${typeClass} .ttl-cover`, {
      x: "-100%",
      ease: "power4.out",
    });
  } else {
    tl.from(`${typeClass} .ttl-cover`, {
      x: "-100%",
      ease: "power4.out",
      // ここでは `delay` を設定しない
    });
  }

  tl.from(
    `${typeClass} .txt-cover`,
    {
      x: "-100%",
      ease: "power4.out",
    },
    "-=0.3"
  )
    .from(`${typeClass} .ttl`, {
      opacity: 0,
    })
    .from(
      `${typeClass} .txt`,
      {
        opacity: 0,
      },
      "<"
    )
    .from(`${typeClass} .img`, {
      opacity: 0,
      y: 10,
      ease: "power4.out",
      // delay: 1,
    })
    .to(
      `${typeClass} .span-top`,
      {
        x: "100%", // translateX(100%)をGSAP形式に変更
        ease: "power4.out",
        // skewX: "45deg", // skew(45deg)をskewXとして正しく指定
      },
      "-=0.3"
    )
    .to(
      `${typeClass} .span-under`,
      {
        x: "-70%", // translateX(-100%)をGSAP形式に変更
        ease: "power4.out",
        // skewX: "135deg", // skew(121deg)をskewXとして正しく指定
      },
      "<"
    )
    .from(
      `${typeClass} .img`,
      {
        filter: "blur(5px)",
      },
      "-"
    );
}
