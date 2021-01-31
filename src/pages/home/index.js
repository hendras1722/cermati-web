import { Fragment } from 'react'
import Policy from '../../Components/Policy'
import Highlights from '../../Components/Hightlist'
import Footer from '../../Components/Footer'
import '../../css/style.css'
import Logo from '../../assets/y-logo-white.png'

const Home = () => {
    return (
        <Fragment>
            <Policy />
            <div className="bg-jumbotron z-10">
                <div className="bg-gradient pt-24">
                    <img src={Logo} alt={"logo"} className="w-10 ml-5 sm:mt-28 md:mt-0 xl:w-1/12" />
                    <div className="w-full justify-center flex">
                        <div className="w-500px xl:w-640  text-center md:mt-24 z-10 sm:mt-16">
                            <h1 className="leading-8 text-white xl:text-5xl">Hello I'm Muhammad Syahendra Anindyantoro</h1>
                            <h1 className="font-bold text-white xl:text-3xl">Consult, Design, and Develop Websites</h1>
                            <div className="text-white xl:text-2xl">Have something great in mind? Feel free to contact me.</div>
                            <div className="text-white xl:text-2xl">I'll help you to make it happen.</div>
                            <div className="flex justify-center">
                                <a href="javascript:void(0)">
                                    <div className="text-white bg-transparent border-white border-4 focus:outline-none p-2 mt-5 button-hover-tr w-52 rounded font-medium">
                                        Let's Make Contact
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 pb-10">
                <Highlights />
            </div>
            <div>
                <Footer />
            </div>
        </Fragment>
    )
}

export default Home;