import { FaCode, FaCloud, FaHeadset, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
    const services = [
        { icon: <FaCode />, title: "IT Development", desc: "Web & Mobile Applications" },
        { icon: <FaCloud />, title: "Cloud & DevOps", desc: "Scalable Infrastructure" },
        { icon: <FaChartLine />, title: "AI & Analytics", desc: "Data-driven insights" },
        { icon: <FaHeadset />, title: "Call Center Services", desc: "24×7 Customer Support" },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-center text-blue-900">
                    Our Services
                </h2>

                <div className="grid md:grid-cols-4 gap-8 mt-12">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-xl shadow-md text-center"
                        >
                            <div className="text-4xl text-blue-700 mb-4 mx-auto">
                                {s.icon}
                            </div>
                            <h3 className="font-semibold">{s.title}</h3>
                            <p className="text-sm text-gray-500 mt-2">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
