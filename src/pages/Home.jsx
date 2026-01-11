import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <section className="min-h-[calc(100vh-5rem)] flex items-center px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">

          {/* LEFT */}
          <div>
            <p className="text-yellow-400 tracking-widest font-semibold mb-4">
              UNDERGRADUATE · ICT
            </p>

            <h1 className="text-5xl font-bold mb-4">
              Hi, I’m <br />
              <span className="text-yellow-400">Sasindu Banuka</span>
            </h1>

            <p className="text-gray-300 text-lg mb-6">
              Aspiring Business Intelligence & Web Developer focused on building
              clean, user-friendly applications.
            </p>

            <div className="border border-yellow-400/60 rounded-xl p-6 mb-6 max-w-xl">
              <p className="text-gray-200">
                I am a Business Intelligence undergraduate pursuing a Bachelor of Information and Communication Technology (Honours) at Uva Wellassa University of Sri Lanka.
With hands-on experience in Power BI dashboard development, data visualization, web development, and Software Quality Assurance (SQA), I enjoy transforming raw data into actionable insights and building modern web applications using current technologies.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="/Sasindu_Banuka_CV.pdf"
                download
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <motion.div
              className="absolute w-[420px] h-[420px] rounded-full bg-yellow-400 blur-3xl opacity-30"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative w-[420px] h-[420px] rounded-full overflow-hidden border-4 border-yellow-400">
              <img src={profile} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
