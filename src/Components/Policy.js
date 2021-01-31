import React, { Fragment, useState, useEffect } from 'react'
import '../css/style.css'
import { useWindowScroll } from "react-use";
import { slideInUp } from 'react-animations'
import Radium from 'radium';

const Policy = React.memo(() => {
    const [visiblity, setVisibliy] = useState(false)
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);
    const [buttonVis, setButtonVis] = useState(false);

    useEffect(() => {
        if (buttonVis) {
            setTimeout(() => {
                setVisiblity(true)
                setButtonVis(false)
            }, 600000)
        } else {
            if (pageYOffset === 204 || pageYOffset > 204) {
                setVisiblity(true)
            }
        }
    }, [pageYOffset])
    const styles = {
        slideInUp: {
            animation: 'x 1s',
            animationName: Radium.keyframes(slideInUp, 'slideInUp')
        }
    }
    const ClosedForm = () => {
        setVisiblity(false)
        setButtonVis(true)
    }
    return (
        <Fragment>
            {visiblity ? (
                <div className="fixed w-full overflow-y-hidden z-10 slideAlert">
                    <div className="bg-gray-50 flex justify-center p-4 slider"  >
                        <div className="w-600 md:flex sm:block items-center">
                            <div className="text-left"> By accessing and using this website, you acknowledge that you have read and
understand our Cookie Policy, Privacy Policy, and our Terms of Service.</div>
                            <button className="w-28 btn-click bg-CusBlue-50 text-white focus:outline-none sm:h-10 md:h-10 sm:mt-3" onClick={() => setVisibliy(true)}>Got It</button>
                        </div>
                    </div>
                </div>
            ) : (
                    <div className="fixed w-full overflow-y-hidden z-10">
                        <div className="bg-gray-50 flex justify-center p-4 slider"  >
                            <div className="w-600 md:flex sm:block items-center">
                                <div className="text-left"> By accessing and using this website, you acknowledge that you have read and
understand our Cookie Policy, Privacy Policy, and our Terms of Service.</div>
                                <button className="w-28 btn-click bg-CusBlue-50 text-white focus:outline-none sm:h-10 md:h-10 sm:mt-3" onClick={() => setVisibliy(true)}>Got It</button>
                            </div>
                        </div>
                    </div>
                )}

            {visible ? (
                <Radium.StyleRoot>
                    <div className={visible ? "bg-CusBlue-50 bg-opacity-95 z-50 fixed slidemedown md:h-52 sm:h-700 md:w-640 sm:w-full p-3" : "bg-CusBlue-50 bg-opacity-95 z-10 fixed slidemedown md:h-52 sm:h-700 w-640 p-3"}
                        // @ts-ignore
                        style={styles.slideInUp}>
                        <div className="flex justify-end">
                            <button className="focus:outline-none text-xl mr-3" onClick={() => ClosedForm()}>x</button>
                        </div>
                        <div className="pr-10 md:pl-5">
                            <div className="text-2xl font-bold text-white">Get latest updates in web technologies</div>
                            <div className="mt-3">
                                <div className="text-sm text-white">
                                    I write articles related to web technologies, such as design trends, development
                                </div>
                                <div className="text-sm text-white">
                                    tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
                                </div>
                                <div className="text-sm text-white">
                                    them all.</div>
                            </div>
                            <div className="flex md:mt-5 sm:mt-3">
                                <input type="text"
                                    placeholder="Email"
                                    className="pl-3 pr-3 focus:outline-none w-full focus:border-0 mr-8 md:mr-3 sm:mr-5" />
                                <button className="btn-form-count w-40 md:w-40 sm:w-52 p-1 text-white btn-click focus:outline-none rounded-sm">Count Me In!</button>
                            </div>
                        </div>
                    </div>
                </Radium.StyleRoot>
            ) : (
                    null
                )}
        </Fragment>
    )
})

export default Policy;