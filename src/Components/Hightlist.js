import { Fragment } from 'react'
import { FaComments, FaPaintBrush, FaCubes, FaBullhorn, FaServer, FaChartLine } from 'react-icons/fa'

const Highlights = () => {
    return (
        <Fragment>
            <div className="p-5 flex justify-center">
                <div className="w-600 text-center mt-12 mb-12 ">
                    <h1 className="font-normal xl:text-5xl mb-3">How Can I Help You?</h1>
                    <div className="text-sm xl:text-lg">Our work then targeted, best practices outcomes social innovation synergy.</div>
                    <div className="text-sm xl:text-lg">Venture philanthropy, revolutionary inclusive policymaker relief. User-centered</div>
                    <div className="text-sm xl:text-lg">program areas scale.</div>
                </div>
            </div>
            {/* grid */}
            <div className="sm:justify-center sm:flex md:flex md:justify-center md:pl-3 md:pr-3 sm:pl-3 sm:pr-3" >
                <div className="flex flex-wrap overflow-hidden w-full">

                    <div className="w-full overflow-hidden lg:w-1/3 xl:w-1/3 lg:my-2 lg:px-2 my-1 px-1 md:w-1/2">
                        <div className="bg-purple-950 border-3 border-purple-950">
                            <div className="bg-gray-50 p-3 shadow-inner xl:h-32">
                                <div className="flex justify-between items-center font-medium">
                                    Consultant
                                <FaComments className="text-2xl" style={{ color: '#aba7b0' }} />
                                </div>
                                <div className="text-xs mt-3">
                                    Co-create, design thinking; strengthen infrastructure resist granular.
                                    Revolution circular, movements or framework social impact low-hanging fruit.
                                    Save the world compelling revolutionary progress.
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full overflow-hidden lg:w-1/3 xl:w-1/3 lg:my-2 lg:px-2 my-1 px-1 md:w-1/2">
                        <div className="bg-purple-950 border-3 border-purple-950">
                            <div className="bg-gray-50 p-3 shadow-inner xl:h-32">
                                <div className="flex justify-between items-center font-medium">
                                    Design
                                <FaPaintBrush className="text-2xl" style={{ color: '#aba7b0' }} />
                                </div>
                                <div className="text-xs mt-3">
                                    Policymaker collaborates collective impact humanitarian shared value
                                    vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile
                                    issue outcomes vibrant boots on the ground sustainable.
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full overflow-hidden lg:w-1/3 xl:w-1/3 lg:my-2 lg:px-2 my-1 px-1 md:w-1/2">
                        <div className="bg-purple-950 border-3 border-purple-950">
                            <div className="bg-gray-50 p-3 shadow-inner xl:h-32">
                                <div className="flex justify-between items-center font-medium">
                                    Develop
                                <FaCubes className="text-2xl" style={{ color: '#aba7b0' }} />
                                </div>
                                <div className="text-xs mt-3">
                                    Revolutionary circular, movements a or impact framework social impact low-
                                    hanging. Save the compelling revolutionary inspire progress. Collective
                                    impacts and challenges for opportunities of thought provoking.
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full overflow-hidden lg:w-1/3 xl:w-1/3 lg:my-2 lg:px-2 my-1 px-1 md:w-1/2">
                        <div className="bg-purple-950 border-3 border-purple-950">
                            <div className="bg-gray-50 p-3 shadow-inner xl:h-32">
                                <div className="flex justify-between items-center font-medium">
                                    Marketing
                                <FaBullhorn className="text-2xl" style={{ color: '#aba7b0' }} />
                                </div>
                                <div className="text-xs mt-3">
                                    Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile,
                                    replicable, effective altruism youth. Mobilize commitment to overcome
                                    injustice resilient, uplift social transparent effective.
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full overflow-hidden lg:w-1/3 xl:w-1/3 lg:my-2 lg:px-2 my-1 px-1 md:w-1/2">
                        <div className="bg-purple-950 border-3 border-purple-950">
                            <div className="bg-gray-50 p-3 shadow-inner xl:h-32">
                                <div className="flex justify-between items-center font-medium">
                                    Manage
                                <FaServer className="text-2xl" style={{ color: '#aba7b0' }} />
                                </div>
                                <div className="text-xs mt-3">
                                    Change-makers innovation or shared unit of analysis. Overcome injustice
                                    outcomes strategize vibrant boots on the ground sustainable. Optimism,
                                    effective altruism invest optimism corporate social.
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full overflow-hidden lg:w-1/3 xl:w-1/3 lg:my-2 lg:px-2 my-1 px-1 md:w-1/2">
                        <div className="bg-purple-950 border-3 border-purple-950">
                            <div className="bg-gray-50 p-3 shadow-inner xl:h-32">
                                <div className="flex justify-between items-center font-medium">
                                    Evolve
                                <FaChartLine className="text-2xl" style={{ color: '#aba7b0' }} />
                                </div>
                                <div className="text-xs mt-3">
                                    Activate catalyze and impact contextualize humanitarian. Unit of analysis
                                    overcome injustice storytelling altruism. Thought leadership mass
                                    incarceration. Outcomes big data, fairness, social game-changer.
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default Highlights;