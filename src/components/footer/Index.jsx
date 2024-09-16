import { useState } from 'react'
import { useNavigate } from "react-router-dom"

import logo from "../../assets/view/Title_Treatment/2022-9-1101 Digital Health AI Center Horizontal Title Treatment_White.png"
import tt from "../../assets/view/tt.png"
import logoaimahead from "../../assets/components/header/aimahead-logo-white-lg.png"

function Index() {

    return (
        <footer className='lg:py-10 lg:px-20 p-4' style={{background: "#4aa1d4"}}>
            <div className='block lg:flex'>
                <div className='w-full lg:w-5/12 mb-8 lg:mb-0 flex justify-center'>
                    <img src={logoaimahead} alt="AI Health Equity Logo" style={{height: '60px', width: 'auto'}}/>
                </div>

                <div className='w-full lg:w-7/12'>
                    <div className='flex flex-col lg:flex-row lg:w-full lg:justify-end flex-wrap gap-6 uppercase'
                         style={{color: "#FFF"}}>

                        <span className='block w-full text-center lg:w-auto lg:inline'>Contact Us</span>
                        <span className='block w-full text-center lg:w-auto lg:inline'>Sign Up For News</span>
                        <span className='block w-full text-center lg:w-auto lg:inline'>San Diego State University</span>

                        {/*}
                        <div className='flex-col lg:flex-row gap-4 hidden lg:flex'>
                            <span className=''>LinkedIn</span>
                            <span className=''>Twitter</span>
                            <span className=''>Instagram</span>
                            <span className=''>Facebook</span>
                            <span className=''>YouTube</span>
                        </div>
                        */}
                    </div>
                </div>
                {/*
                <div className='flex justify-center gap-x-4 mt-4 lg:hidden'>
                    <div className='w-10 h-20 flex justify-center items-center rounded-full overflow-hidden'>
                        <img src={tt}/>
                    </div>
                    <div className='w-10 h-20 flex justify-center items-center rounded-full overflow-hidden'>
                        <img src={tt}/>
                    </div>
                    <div className='w-10 h-20 flex justify-center items-center rounded-full overflow-hidden'>
                        <img src={tt}/>
                    </div>
                    <div className='w-10 h-20 flex justify-center items-center rounded-full overflow-hidden'>
                        <img src={tt}/>
                    </div>
                </div>
                */}
            </div>
            <span  style={{color: "#FFF"}} className='block w-full text-center lg:w-auto lg:inline'>AIM-AHEAD Coordinating Center is funded by NIH, Agreement No.: 1OT2OD032581-01</span>

        </footer>
    )
}

export default Index
