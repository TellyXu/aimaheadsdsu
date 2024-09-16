import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/view/Title_Treatment/2022-9-1101 Digital Health AI Center Horizontal Title Treatment_White.png"

import Header from "../../components/header/Index";
import Footer from "../../components/footer/Index";

import first_bg1 from "../../assets/view/1st_background/bg_image1.jpeg"; // no longer used to satisfy the requirement of logo policy
import first_bg2 from "../../assets/view/1st_background/bg_image2.jpeg";
import first_bg3 from "../../assets/view/1st_background/bg_image3.jpg";  // no longer used to satisfy the requirement of logo policy
import first_bg4 from "../../assets/view/1st_background/bg_image4.jpeg"; // no longer used to satisfy the requirement of logo policy
import first_bg5 from "../../assets/view/1st_background/bg_image5.jpg";
import first_bg6 from "../../assets/view/1st_background/bg_image6.jpeg";

import ucsd_bg1 from "../../assets/view/ucsdphotos/11.png";
import ucsd_bg2 from "../../assets/view/ucsdphotos/22.jpg";
import ucsd_bg3 from "../../assets/view/ucsdphotos/33.jpg";
import ucsd_bg4 from "../../assets/view/ucsdphotos/44.jpg";
import ucsd_bg5 from "../../assets/view/ucsdphotos/55.jpeg";

const bg2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wIAAgMBAAirR9cAAAAASUVORK5CYII=";

//import bg2 from "../../assets/view/bg2.svg";
import main from "../../assets/view/main2.jpg";
import TMedit from "../../assets/view/sdsutwo.png";

import main6 from "../../assets/view/main6.jpg";

import news1 from "../../assets/view/news1.jpeg";
import news2 from "../../assets/view/news2.jpg";
import news3 from "../../assets/view/news3.jpg";
import bIMG_7003_TMedit from "../../assets/view/sdsutwo.png";

import Scrollreveal from "scrollreveal"
import { CSSTransition } from 'react-transition-group';

import icon1 from "../../assets/view/icon1.jpg"
import icon2 from "../../assets/view/icon2.jpg"
import icon1Bg from "../../assets/view/icon1Bg.jpg"
import icon2Bg from "../../assets/view/icon2Bg.jpg"


import "./Index.css"

function Index() {
    // const navigate = useNavigate();
    const two = useRef(null);
    const [isMain, setIsMain] = useState(false);
    const cssRef = useRef(null);

    const [bgColor, setBgColor] = useState('rgba(255, 255, 255, 0)'); // 初始颜色为完全透明
    const [opacity1, setOpacity1] = useState(1);

    useEffect(() => {
        const currentElement = two.current;
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) setIsMain(false)
                else setIsMain(true)
            });
        });

        if (currentElement) {
            io.observe(currentElement);
        }


        const scrollreveal = new Scrollreveal()
        setTimeout(() => {
            const optionsScoll = (position) => {
                return {
                    duration: 1000,
                    delay: 300,
                    origin: position ? position : 'right',
                    reset: true,
                    mobile: true,
                    distance: '500px',
                    opacity: 0.001,
                    easing: 'cubic-bezier(0.5, 0, 0, 1)',
                    scale: 1,
                }
            }
            scrollreveal.reveal('#bg2', optionsScoll('bottom'))
            scrollreveal.reveal('#bg3, #bg4', optionsScoll('right'))
        }, 500)

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            let opacity_bg = 0;
            if (scrollTop < 1000) {
                opacity_bg = 0.9*scrollTop/750;
            } else {
                opacity_bg = 1;
            }

            // 根据滚动距离计算背景颜色的不透明度
            const newColor = `rgba(0, 45, 114, ${opacity_bg})`;
            setBgColor(newColor);


            // 设置一个基准滚动距离，在此之后元素开始变淡
            const fadeStart = 20;
            // 设定最大滚动距离，达到此距离后元素完全透明
            const fadeUntil = 100;

            let newOpacity = 1;

            if (scrollTop > fadeStart) {
                newOpacity = 1 - ((scrollTop - fadeStart) / (fadeUntil - fadeStart));
                newOpacity = newOpacity < 0 ? 0 : newOpacity;
            }
            setOpacity1(newOpacity);
        };


        // 监听页面滚动事件
        window.addEventListener('scroll', handleScroll);

        return () => {
            if (currentElement) io.disconnect()

        }





    }, [])


    return (
        <div>
            <Header />
            <main className="text-white">
                <div style={{backgroundColor: bgColor}}>
                    <div id="slideshow" className="absolute w-full h-full top-0 -z-10">

                        <img className="slide absolute w-full h-full object-cover opacity-0" src={ucsd_bg3}
                             alt="Background 1"/>

                        <img className="slide absolute w-full h-full object-cover opacity-0" src={ucsd_bg2}
                             alt="Background 2"/>

                        <img className="slide absolute w-full h-full object-cover opacity-0" src={ucsd_bg4}
                             alt="Background 3"/>
                        <img className="slide absolute w-full h-full object-cover opacity-0" src={ucsd_bg3}
                             alt="Background 4"/>


                        <img className="slide absolute w-full h-full object-cover opacity-0" src={ucsd_bg4}
                             alt="Background 5"/>
                        <img className="slide absolute w-full h-full object-cover opacity-0" src={ucsd_bg5}
                             alt="Background 6"/>
                    </div>

                    <div className="relative h-screen element">

                        <h1 className="w-6/12 text-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <p style={{fontFamily: 'quadon', fontWeight: 600, fontSize: '50px',  opacity: opacity1}}
                               className="m-0 text-6xl font-bold fadeInSlow">
                                AI for Health Equity Research Lab
                            </p>

                            <div style={{fontFamily: 'gentona', fontWeight: 400, fontSize: '18px'}}
                                 className="mt-3 text-lg fadeInFast">
                                supported by AIM AHEAD Program for AI Readiness (PAIR)
                            </div>
                        </h1>
                        <CSSTransition in={isMain} timeout={300} classNames="fade" unmountOnExit nodeRef={cssRef}>
                            <div ref={cssRef}
                                 className="absolute left-1/2 -translate-x-1/2 transform bg-yellow-400 z-10 opacity-60"
                                 style={{width: "1px", height: "20rem", bottom: "-6rem"}}></div>
                        </CSSTransition>
                    </div>
                </div>
                    <div className="relative pb-20 bg-rose-300 bg-opacity-15 overflow-hidden"
                         style={{background: "#4aa1d4"}}>
                        <img id="bg2" className="absolute w-full h-full -left-48 top-0 z-20 opacity-5 object-contain"
                             src={bg2} alt="Background"/>
                        <div ref={two} className="w-11/12 relative z-20 text-center mx-auto">
                            <p style={{fontFamily: 'quadon', fontWeight: 400}}
                               className="m-0 mt-52 text-6xl font-bold text-center">The Latest</p>
                            <div className='relative mt-8 flex'>
                                <div
                                    className='w-8/12 left-content text-left border-r pr-20 box-border border-r-white border-opacity-20'>
                                    <img className='w-full shadow-primary' src={TMedit}/>
                                    <p style={{
                                        fontFamily: 'gentona',
                                        fontWeight: 200,
                                        fontSize: '14px',
                                        color: 'rgb(241, 196, 0)'
                                    }} className='mt-8' style={{color: "#F1C400"}}>Introduction</p>
                                    <p style={{fontFamily: 'gentona', fontWeight: 400, fontSize: '36px'}}
                                       className='font-bold mt-4 text-3xl hover:underline'>AI for Health Equity Research Lab supported by AIM-AHEAD Program for AI Readiness (PAIR) </p>
                                    <p style={{fontFamily: 'gentona', fontWeight: 200, fontSize: '18px'}}
                                       className='mt-2'>
                                        TBD
                                    </p>
                                    {/*
                                <div className='mt-8 flex gap-x-10'>
                                    <div className='w-6/12 flex flex-col'>
                                        <img className='w-full shadow-primary' src={main4} />
                                        <p className='mt-8' style={{ color: "#F1C400" }}>Highlight</p>
                                        <p className='mt-3 text-4xl'>
                                            GKII Announces Breakthrough Grant Awardees for Health Data Research
                                        </p>
                                        <p className='mt-3'>
                                            This exciting collaboration with Ashoka University is focused on the field of Health Data Research. Two teams were selected, each with a lead PI from both Johns Hopkins University and Ashoka University. This grant challenge awards $60,000 to each winning proposal for 18 months.
                                        </p>
                                    </div>
                                    <div className='w-6/12 flex flex-col'>
                                        <img className='w-full shadow-primary' src={main3} />
                                        <p className='mt-8' style={{ color: "#F1C400" }}>Highlight</p>
                                        <p className='mt-3 text-4xl'>
                                            Dr. Gigi Gronvall the Awardee of GKII Climate & Health Breakthrough Grant
                                        </p>
                                        <p className='mt-3'>
                                            The Gupta-Klinsky India Institute is excited to announce that Dr. Gigi Gronvall, Associate Professor, Department of Environmental Health and Engineering, at the Johns Hopkins Bloomberg School of Public Health has been selected as the awardee of the Summer 2023 GKII Breakthrough Research Grants Program!
                                        </p>
                                    </div>
                                </div>
                                                     */}
                                </div>


                                <div className='w-4/12 pl-12 right-content-line'>
                                    <div className=''>
                                        <div className='text-left right-content-line1'>
                                            <p className='text-6xl font-bold' style={{color: "#eac642", fontFamily: 'Arnhem', fontWeight: 700, fontSize: '70px'}}>
                                                1000+
                                            </p>
                                            <p className='my-3 font-bold text-2xl' style={{fontFamily: 'gentona', fontWeight: 700, fontSize: '30px'}}>
                                                Courses Offered
                                            </p>
                                            <p style={{fontFamily: 'gentona', fontWeight: 200, fontSize: '18px'}}>
                                                Our Courses on AIMAHEAD
                                            </p>
                                        </div>
                                        <div className='mt-10 text-left right-content-line2'>
                                            <p className='text-6xl font-bold' style={{color: "#eac642", fontFamily: 'Arnhem', fontWeight: 700, fontSize: '70px'}}>
                                                999+
                                            </p>
                                            <p className='my-3 font-bold text-2xl' style={{fontFamily: 'gentona', fontWeight: 700, fontSize: '30px'}}>
                                                Partner Organizations
                                            </p>
                                            <p style={{fontFamily: 'gentona', fontWeight: 200, fontSize: '18px'}}>
                                                We collaborate with a vast array of partners across all states and union
                                                territories
                                            </p>
                                        </div>
                                        <div className='mt-10 text-left right-content-line3'>
                                            <p className='text-6xl font-bold' style={{color: "#eac642", fontFamily: 'Arnhem', fontWeight: 700, fontSize: '70px'}}>
                                                100+
                                            </p>
                                            <p className='my-3 font-bold text-2xl' style={{fontFamily: 'gentona', fontWeight: 700, fontSize: '30px'}}>
                                                San Diego State University
                                            </p>
                                            <p style={{fontFamily: 'gentona', fontWeight: 200, fontSize: '18px'}}>
                                                Our multidisciplinary faculty are committed to advancing AIMAHEAD
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className='mt-4 border-t border-white pt-4 border-opacity-30 right-content-line4'>
                                        <div
                                            className='w-48 btn bg-white p-4 flex justify-center items-center hover:bg-yellow-400 cursor-pointer transition-all'
                                            style={{color: "#4aa1d4", fontFamily: 'gentona', fontWeight: 600, fontSize: '18px'}}>
                                            More About Us <span className='ml-2 transition-all text-yellow-400'>→</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="relative bg-opacity-15 pt-40" style={{background: "#f3f3f3"}}>
                        <div className="absolute left-1/2 -translate-x-1/2 transform bg-yellow-400 z-30 opacity-60"
                             style={{width: "1px", height: "8rem", bottom: "44rem"}}></div>

                        <div className="w-11/12 relative z-20 text-center mx-auto text-black">
                            <p className="m-0 text-6xl font-bold text-center" style={{fontFamily: 'quadon', fontWeight: 400}}>Resources</p>

                            <div className='mt-12 flex gap-x-10'>
                                <div className='w-6/12 bg-white'>
                                    <div className='relative'>
                                        <div className='relative'>
                                            <img className='w-full' src={icon1Bg}/>
                                            <div className='absolute top-0 w-full h-full bg-black bg-opacity-40'></div>
                                        </div>
                                        <div
                                            className='flex items-center absolute left-52 top-28 transform -translate-x-1/2'>
                                            <div className='w-24 h-24 flex p-4 rounded-full overflow-hidden'
                                                 style={{background: "#eac642"}}>
                                                <img className='w-full' src={icon1}/>
                                                <div className="absolute left-1/2 transform bg-yellow-400 z-30" style={{
                                                    width: "1px",
                                                    height: "8rem",
                                                    left: "3rem",
                                                    bottom: "-10rem"
                                                }}></div>
                                            </div>
                                            <p className='ml-4 text-3xl border-b-4 hover:border-transparent text-white border-solid border-yellow-400 font-bold cursor-pointer'>Resources</p>
                                        </div>
                                        <div className='text-left p-8'>
                                            <p>Read the latest research news, learn about our affiliated Centers and
                                                Institutes, and access resources for conducting research.</p>
                                            <p className='mt-4 flex items-center'>
                                                <span className='text-lg' style={{color: "#4aa1d4"}}>Resources for Researchers</span>
                                                <span className="animated_circle ml-2" aria-hidden="true">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                     width="24px" height="24px" viewBox="0 0 24 24" xmlSpace="preserve">
                                                    <g className="animated_icon_arrow" fill="none" stroke="#2175FF"
                                                       strokeWidth="1.5">
                                                        <path transform="translate(6, 12)"
                                                              d="M9.0075 2.25H0V3.75H9.0075V6L12 3L9.0075 0V2.25Z"
                                                              fill="#002D72"></path>
                                                    </g>
                                                    <circle className="animated_icon_circle" transform="rotate(-90)"
                                                            cx="11" cy="11" r="11" fill="transparent" stroke="#2175FF"
                                                            strokeWidth="1"></circle>
                                                </svg>
                                            </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-6/12 bg-white'>
                                    <div className='relative'>
                                        <div className='relative'>
                                            <img className='w-full' src={icon2Bg}/>
                                            <div className='absolute top-0 w-full h-full bg-black bg-opacity-40'></div>
                                        </div>
                                        <div
                                            className='flex items-center absolute left-52 top-28 transform -translate-x-1/2'>
                                            <div className='w-24 h-24 flex p-4 rounded-full overflow-hidden'
                                                 style={{background: "#eac642"}}>
                                                <img className='w-full' src={icon2}/>
                                                <div className="absolute left-1/2 transform bg-yellow-400 z-30" style={{
                                                    width: "1px",
                                                    height: "8rem",
                                                    left: "3rem",
                                                    bottom: "-10rem"
                                                }}></div>
                                            </div>
                                            <p className='ml-4 text-3xl border-b-4 hover:border-transparent text-white border-solid border-yellow-400 font-bold cursor-pointer'>Education</p>
                                        </div>
                                        <div className='text-left p-8'>
                                            <p>Discover student opportunities and connections.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='px-20 py-20 relative overflow-hidden' style={{background: "#4aa1d4"}}>
                        <img id="bg3" className="absolute w-full h-full left-40 top-0 z-10 opacity-5 object-cover"
                             src={bg2}/>
                        <div className='flex items-center relative z-20'>
                            <div className='w-6/12 px-10'>
                                <p className='font-bold text-3xl'>AI for Health Equity Research Lab</p>
                                <p className='font-bold text-3xl'>supported by Program for AI Readiness (PAIR)</p>
                                <p className='mt-4 text-md'>JOIN THE EMAIL LIST</p>
                                <div
                                    className='w-44 mt-4 btn bg-white p-3 flex justify-center items-center hover:bg-yellow-400 cursor-pointer transition-all'
                                    style={{color: "#4aa1d4"}}>
                                    JOIN NOW<span className='ml-2 transition-all text-yellow-400'>→</span>
                                </div>
                            </div>
                            <div className='w-6/12'>
                                <img className='w-full shadow-primary' src={bIMG_7003_TMedit}/>
                            </div>
                        </div>
                    </div>

                    {/*<div className='py-10' style={{background: "#f3f3f3"}}>*/}
                    {/*    <p className='mt-10 text-center text-gray-700 text-5xl font-bold'>News</p>*/}
                    {/*    <div className='mt-10 flex gap-x-8 px-20'>*/}
                    {/*        <div>*/}
                    {/*            /!*<img className='' src={news1} style={{height: '200px', width: 'auto'}}/>*!/*/}
                    {/*            <p className='text-xs my-4' style={{color: "#002D72"}}>News</p>*/}
                    {/*            <p className='flex items-center font-bold' style={{color: "#0f2c6e"}}>*/}
                    {/*                Check Out Our Latest Newsletter!*/}
                    {/*                <span className="animated_circle ml-2" aria-hidden="true">*/}
                    {/*                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"*/}
                    {/*                     x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24"*/}
                    {/*                     xmlSpace="preserve">*/}
                    {/*                    <g className="animated_icon_arrow" fill="none" stroke="#2175FF"*/}
                    {/*                       strokeWidth="1.5">*/}
                    {/*                        <path transform="translate(6, 12)"*/}
                    {/*                              d="M9.0075 2.25H0V3.75H9.0075V6L12 3L9.0075 0V2.25Z"*/}
                    {/*                              fill="#002D72"></path>*/}
                    {/*                    </g>*/}
                    {/*                    <circle className="animated_icon_circle" transform="rotate(-90)" cx="11" cy="11"*/}
                    {/*                            r="11" fill="transparent" stroke="#2175FF" strokeWidth="1"></circle>*/}
                    {/*                </svg>*/}
                    {/*            </span>*/}
                    {/*            </p>*/}
                    {/*            <p className='my-2 text-black font-bold'>AI for health equity: navigating the future of*/}
                    {/*                health care</p>*/}
                    {/*            <p className='' style={{color: "#31261D"}}>*/}
                    {/*                TBD*/}

                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <img className='' src={news2} style={{height: '200px', width: 'auto'}}/>*/}
                    {/*            <p className='text-xs' style={{color: "#f3f3f3"}}>Highlight</p>*/}
                    {/*            <p className='font-bold' style={{color: "#0f2c6e"}}>Leading researchers gather to*/}
                    {/*                advance the promise of digital technologies and AI</p>*/}
                    {/*            <p className='text-black'>June 8th, 2023</p>*/}
                    {/*            <p className='text-black'>*/}
                    {/*                TBD*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            /!*<img className='' src={news3} style={{height: '200px', width: 'auto'}}/>*!/*/}
                    {/*            <p className='text-xs' style={{color: "#f3f3f3"}}>Events</p>*/}
                    {/*            <p className='font-bold' style={{color: "#0f2c6e"}}>TBD</p>*/}
                    {/*            <p className='text-black'>*/}
                    {/*                TBD </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className='px-20 py-20 relative overflow-hidden' style={{background: "#0f2c6e"}}>*/}
                    {/*    <img id="bg4" className="absolute w-full h-full left-40 top-0 z-10 opacity-5 object-cover"*/}
                    {/*         src={bg2}/>*/}
                    {/*    <div className='flex items-center relative z-20'>*/}
                    {/*        <div className='w-6/12 px-10'>*/}
                    {/*            <p className='text-xl'>Join Our (TBD)</p>*/}
                    {/*            <p className='font-bold text-4xl'>Mailing list</p>*/}
                    {/*            <p className='mt-4 text-md'> newsletter for information about*/}
                    {/*                upcoming events and more. </p>*/}
                    {/*            <div*/}
                    {/*                className='w-44 mt-4 btn bg-white p-3 flex justify-center items-center hover:bg-yellow-400 cursor-pointer transition-all'*/}
                    {/*                style={{color: "#0f2c6e"}}>*/}
                    {/*                Subscribe now <span className='ml-2 transition-all text-yellow-400'>→</span>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className='w-6/12'>*/}
                    {/*            <img className='w-full shadow-primary' src={main6}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className='px-20 py-10 relative overflow-hidden' style={{background: "white"}}>
                        <div className='text-center'>
                            <p className='text-5xl font-bold' style={{color: "#2e271f"}}>Join Us(TBD)</p>
                            <p className='mt-4 text-xl text-black'>Your Join Changes the World</p>
                            <div
                                className='w-44 mx-auto mt-8 btn2 bg-blue-900 p-3 flex justify-center items-center hover:bg-blue-400 cursor-pointer transition-all'
                                style={{color: "white"}}>
                                Join us now<span className='ml-2 transition-all text-white'>→</span>
                            </div>
                        </div>
                    </div>
            </main>

            <Footer/>
        </div>
);
}


export default Index;
