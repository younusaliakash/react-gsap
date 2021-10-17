import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { Power2 } from 'gsap/gsap-core';
import React, { useEffect, useRef } from 'react';
import image from '../../images/flower.jpg';
import './ImageReveal.css';

const ImageReveal = () => {
    let container = useRef(null);
    let img = useRef(null)
    let imageReveal  = CSSRulePlugin.getRule(".img-container::after")

    let tl = gsap.timeline();

    useEffect(() => {
        tl.to(container, 0, { css : {visibility : "visible"}}).to(
            imageReveal,
            1.4,
            {width: "0%", ease: Power2.easeInOut}
        )
    })

    return (
        <div className="main">
            <div ref={el => ( container = el)} className="container">
                <div className="img-container">
                    <img ref={el => (img = el)} src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ImageReveal;