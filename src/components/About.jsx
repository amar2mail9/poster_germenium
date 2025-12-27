import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6 text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-blue-900"
                >
                    Who We Are
                </motion.h2>

                <p className="mt-6 text-gray-600">
                    Germanium Technologies Limited is a technology-driven organization
                    delivering scalable IT solutions, digital platforms, and
                    customer support services to businesses worldwide.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    {["Vision", "Mission", "Values"].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8 }}
                            className="p-6 rounded-xl shadow-lg border"
                        >
                            <h3 className="font-semibold text-xl text-blue-800">
                                {item}
                            </h3>
                            <p className="mt-3 text-gray-500 text-sm">
                                {item === "Vision" && "To be a trusted global technology partner."}
                                {item === "Mission" && "Deliver secure, scalable, future-ready solutions."}
                                {item === "Values" && "Innovation • Integrity • Excellence"}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;
