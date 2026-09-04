import assets from "../assets/assets";
import { servicesData } from "../constant/services";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import { motion } from "motion/react";

const Services = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
            id="services"
            className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-300 dark:text-white"
        >
            <img
                src={assets.bgImage2}
                alt=""
                className="absolute -top-110 -left-70 -z-1 dark:hidden"
            />
            <Title
                title="How can we help"
                desc="From strategy to execution, we craft digital solution that move your business forward."
            />

            <div className="flex flex-col md:grid grid-cols-2">
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </motion.div>
    );
};

export default Services;
