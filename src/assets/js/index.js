import $ from "jquery"
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const items = gsap.utils.toArray(".js-trigger");
items.forEach((item) => {
    const imgElement = window.innerWidth <= 768 
        ? item.querySelector(".sp-img")  // 768px以下の時は.sp-img
        : item.querySelector(".pc-img"); // 769px以上の時は.pc-img

    gsap.fromTo(
        imgElement, 
        {
            yPercent: 0, 
        },
        {
            yPercent: -20, // 上に要素の幅の1/5分移動
            ease: "none", // イージングなし
            scrollTrigger: {
                trigger: item, // アニメーションのトリガー要素
                start: "top bottom", // アニメーション開始位置
                end: "bottom top", // アニメーション終了位置
                scrub: 1, // 動作を遅らせる
            },
        }
    );
});
