import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

import blood from "../assets/projects/blood.jpg";
import gemora from "../assets/projects/gemora.jpg";
import hr from "../assets/projects/hr.jpg";
import ecommerce from "../assets/projects/ecommerce.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Online Blood Donation Platform",
      desc:
        "MERN stack–based online blood donation system with role-based users, secure authentication, real-time blood requests, and donor eligibility tracking.",
      link: "https://github.com/ayeshlakshan35/OneBlood-frontend",
      image: blood,
    },
    {
      title: "GEMORA – Online Gem Trading Platform",
      desc:
        "MERN stack web application connecting gem buyers and sellers with secure authentication, product listings, direct communication, and real-time updates.",
      link: "https://github.com/sasi708/GEMORA",
      image: gemora,
    },
    {
      title: "HR Analytics Dashboard",
      desc:
        "Interactive Power BI dashboard analyzing 300+ employee records, providing insights into headcount, salary trends, and workforce diversity.",
      link: "https://github.com/sasi708/HR-Analysis-Dashboard",
      image: hr,
    },
    {
      title: "E-Commerce Analytics Dashboard",
      desc:
        "Power BI dashboard using 5000+ records to analyze sales performance, revenue trends, delivery time, session duration, and customer behavior.",
      link: "https://github.com/sasi708/E-Commerce-Dashboard",
      image: ecommerce,
    },
  ];

  return (
    <PageWrapper>
      <section className="min-h-screen px-24 py-20">
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-yellow-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="group border border-yellow-400/40 rounded-2xl overflow-hidden
                         hover:border-yellow-400 transition"
            >
              {/* IMAGE */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                             group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.desc}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-yellow-400 font-medium hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
