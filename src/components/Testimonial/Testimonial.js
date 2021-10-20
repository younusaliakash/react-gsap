import gsap from 'gsap';
import { Power3 } from 'gsap/gsap-core';
import React, { useEffect, useRef, useState } from 'react';
import 'reset-css';
import leftArrow from '../../assets/arrow-left.svg';
import rightArrow from '../../assets/arrow-right.svg';
import nayem from "../../assets/hm_nayem.jpeg";
import jhankar from "../../assets/jhankar.jpg";
import sumit from "../../assets/sumit_saha.jpg";
import './Testimonial.scss';


const data = [
    {
        name: "Jhankar Mahbub",
        title : "CEO, Programming Hero",
        image: jhankar,
        quote: "Programming isn't about what you know; it's about what you can figure out."
    },
    {
        name: "HM Nayem",
        title : "CEO, Stack Learner",
        image: nayem,
        quote: "Don't write better error messages, write code that doesn't need them."
    },
    {
        name: "Sumit Saha",
        title : "CEO, Learn With Sumit",
        image: sumit,
        quote: "The only way to learn a new programming language is by writing programs in it."
    },
]

const Testimonial = () => {
    const [isActive, setIsActive] = useState({
        active1 : true,
        active2 : false,
        active3 : false
    })

    let imageList = useRef(null);
    let testimonialList = useRef(null);

    useEffect(() => {
        gsap.to(testimonialList.children[0], 0, {
            opacity: 1
        })
    }, [])

    const slideLeft = (index, duration, multipliedBy = 1) => {
        gsap.to(imageList.children[index], duration, {
            x : -340 * multipliedBy,
            ease : Power3.easeOut
        })
    }

    const slideRight = (index, duration, multipliedBy = 1) => {
        gsap.to(imageList.children[index], duration, {
            x : 340 * multipliedBy,
            ease : Power3.easeOut
        })
    }

    const scale = (index, duration ) => {
        gsap.from(imageList.children[index], duration, {
            scale : 1.2,
            ease : Power3.easeOut
        })
    }

    const textOut = (index, duration) => {
        gsap.to(testimonialList.children[index], duration, {
            opacity: 0,
        })
    }

    const textIn = (index, duration) => {
        gsap.to(testimonialList.children[index], duration, {
            opacity: 1,
            delay: 1
        })
    }

    const nextSlide = () => {
        if(imageList.children[0].classList.contains("active")){
            setIsActive({
                active1: false, active2: true
            })
            
        slideLeft(0, 1)
        slideLeft(1, 1)
        scale(1,1)

        //out
        textOut(0, 1)
        //in
        textIn(1, 1)
        
        } else if(imageList.children[1].classList.contains("active")){
            setIsActive({
                active2: false, active3: true
            })
        slideRight(0, 1)
        slideLeft(1, 1, 2)
        slideLeft(2, 1, 2)
        scale(2,1)

        //out
        textOut(1, 1)
        //in
        textIn(2, 1)

        } else if(imageList.children[2].classList.contains("active")){
            setIsActive({
                active3: false, active1: true
            })
        slideLeft(2, 1, 3);
        slideLeft(0, 1, 0);
        slideLeft(1, 0, 0);
        scale(0, 1);
        
        textOut(2, 1);
        textIn(0, 1);
        }
    }

    const prevSlide = () => {
        if(imageList.children[0].classList.contains("active")){
            setIsActive({
                active1: false, active3: true
            })
            
        slideLeft(2, 0, 3)
        slideLeft(2, 1, 2)
        scale(2,1)

        slideRight(0,1)
        slideRight(1,1)

        //out
        textOut(0, 1)
        //in
        textIn(2, 1)
        
        } else if(imageList.children[1].classList.contains("active")){
            setIsActive({
                active2: false, active1: true
            })

        slideLeft(0, 0);
        slideRight(0, 1, 0);
        slideRight(1, 1, 0);
        slideRight(2, 1, 2);
        scale(0, 1);
        //out
        textOut(1, 1)
        //in
        textIn(0, 1)

        } else if(imageList.children[2].classList.contains("active")){
            setIsActive({
                active3: false, active2: true
            })
        slideLeft(2, 1);
        slideLeft(1, 0, 2);
        slideLeft(1, 1);
        scale(1, 1);
        //out
        textOut(2, 1)
        //in
        textIn(1, 1)
        }
    }



    return (
        <>
        <div className="testimonial_section">
            <div className="testimonial_container">
                <div onClick={prevSlide} className="testimonial-arrow left">
                    <span>
                        <img src={leftArrow} alt="" />
                    </span>
                </div>
                {/* Main Section start*/}
                <div className="testimonial_main_content">
                    <div className="testimonial_image">
                        <ul ref={(el) => imageList = el}>
                            <li className={ isActive.active1 ? "active" : ""}>
                                <img src={data[0].image} alt="" />
                            </li>
                            <li className={ isActive.active2 ? "active" : ""}>
                                <img src={data[1].image} alt="" />
                            </li>
                            <li className={ isActive.active3 ? "active" : ""}>
                                <img src={data[2].image} alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className="testimonial-typography">
                    <ul ref={(el) => testimonialList = el}>
                        <li className={ isActive.active1 ? "active" : ""}>
                            <div className="text-content">
                                <p className="quote_text">
                                    {data[0].quote}
                                </p>
                                <h3 className="name">
                                    {data[0].name}
                                </h3>
                                <h4 className="title_text">
                                    {data[0].title}
                                </h4>
                            </div>
                        </li>
                        <li className={ isActive.active2 ? "active" : ""}>
                            <div className="text-content">
                                <p className="quote_text">
                                    {data[1].quote}
                                </p>
                                <h3 className="name">
                                    {data[1].name}
                                </h3>
                                <h4 className="title_text">
                                    {data[1].title}
                                </h4>
                            </div>
                        </li>
                        <li className={ isActive.active3 ? "active" : ""}>
                            <div className="text-content">
                                <p className="quote_text">
                                    {data[2].quote}
                                </p>
                                <h3 className="name">
                                    {data[2].name}
                                </h3>
                                <h4 className="title_text">
                                    {data[2].title}
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
                {/* Main Section end*/}
                <div onClick={nextSlide} className="testimonial-arrow right">
                    <span>
                        <img src={rightArrow} alt="" />
                    </span>
                </div>
            </div>
        </div>
        <p className="copy-right">Design By: Younus Ali Akash</p>
    </>
    );
};

export default Testimonial;