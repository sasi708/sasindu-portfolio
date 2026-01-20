import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

// Images
import blood from "../assets/projects/blood.jpg";
import gemora from "../assets/projects/gemora.jpg";
import hr from "../assets/projects/hr.jpg";
import ecommerce from "../assets/projects/ecommerce.jpg";
import pythonSales from "../assets/projects/python-sales.jpg";
import studentPerformance from "../assets/projects/student-performance.jpg";

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
    {
      title: "Python Sales Analysis Dashboard (NumPy + Power BI)",
      desc:
        "Sales analytics project using Python (NumPy) for data preprocessing and aggregation, with an interactive Power BI dashboard highlighting key KPIs such as total revenue, top products, and salesperson performance.",
      link: "https://github.com/sasi708/python-sales-analysis",
      image: pythonSales,
    },
    {
      title: "Student Performance & Learning Analytics System",
      desc:
        "Data analytics project using Python (Pandas & NumPy) to analyze student performance factors. Includes data cleaning, exploratory data analysis, and an interactive Power BI dashboard to evaluate performance levels, gender gaps, lunch type impact, and test preparation effects.",
      link: "https://github.com/sasi708/student-performance--pandas-numpy-", // change if repo name differs
      image: studentPerformance,
    },
  ];

  return (
    <PageWrapper>
      <section className="min-h-screen px-4 sm:px-8 md:px-24 py-12 md:py-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">
          My <span className="text-yellow-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="group border border-yellow-400/40 rounded-2xl overflow-hidden hover:border-yellow-400 transition"
            >
              {/* Image */}
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                  {project.desc}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-yellow-400 font-medium hover:underline text-sm sm:text-base">
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
