import assets from "../assets/assets"
import { workData } from "../constant/ourWork"
import Title from "./Title"

const OurWork = () => {
    return (
        <div id='our-work' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-300 dark:text-white'>
            <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />
            <Title title="Our Latest Work" desc="From strategy to execution, we craft digital solution that move your business forward." />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                {workData.map((work, index) => (
                    <div key={index} className="hover:scale-105 duration-500 transition-all cursor-pointer">
                        <img src={work.image} alt="" className="w-full rounded-xl" />
                        <h3 className="mt-3 mb-2 text-lg font-semibold text-black dark:text-white">{work.title}</h3>
                        <p className="text-sm opacity-60 w-5/6 text-gray-800 dark:text-gray-500">{work.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurWork
