import assets from "../assets/assets"
import Title from "./Title"

const Contact = () => {
    return (
        <div id='contact' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-300 dark:text-white'>
            <Title title="Reach Out to Us" desc="From strategy to execution, we craft digital solution that move your business forward." />

            <form className="grid sm:grid-cols-2 gap-6 sm:gap-5 w-full max-w-5xl">
                <div>
                    <p className="mb-2 text-sm font-medium">Your Name</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.person_icon} alt="" />
                        <input type="text" placeholder="Enter your name" name="name" className="w-full p-3 text-sm outline-none" required/>
                    </div>
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium">Email ID</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.email_icon} alt="" />
                        <input type="email" placeholder="Enter your name" name="name" className="w-full p-3 text-sm outline-none" required/>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <p className="mb-2 text-sm font-medium">Message</p>
                    <textarea name="message" rows={8} placeholder="Enter your message" className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600" required></textarea>
                </div>
                <button type="submit" className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:sca1e-103 transition-all">
                    Submit <img src={assets.arrow_icon} alt="" className="w-4" />
                </button>
            </form>
        </div>
    )
}

export default Contact
