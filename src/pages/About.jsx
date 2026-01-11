import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <section className="min-h-screen px-24 py-20">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8">
          About <span className="text-yellow-400">Me</span>
        </h2>

        {/* Intro */}
        <p className="text-gray-300 max-w-4xl leading-relaxed mb-6">
          I am currently following a Bachelor of Information and Communication
          Technology (Honours) degree with a specialization in Business
          Intelligence at Uva Wellassa University of Sri Lanka, maintaining a
          GPA of <span className="text-yellow-400 font-semibold">3.32 / 4.00</span>.
        </p>

        <p className="text-gray-300 max-w-4xl leading-relaxed mb-6">
          My academic journey and practical exposure have strengthened my skills
          in data analytics, dashboard development, and full-stack web
          development. I have worked extensively with Power BI, developing
          interactive dashboards to analyze business and HR data, and I have
          experience building MERN stack web applications with secure
          authentication and real-time features.
        </p>

        <p className="text-gray-300 max-w-4xl leading-relaxed mb-10">
          I enjoy transforming raw data into actionable insights and designing
          clean, user-friendly digital solutions. My interests lie in analytics,
          modern web technologies, and continuous learning through real-world
          projects and collaboration.
        </p>

        {/* Passion List */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
            What I’m Passionate About
          </h3>

          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Converting complex datasets into meaningful insights</li>
            <li>Designing clean, user-friendly interfaces</li>
            <li>Exploring modern web technologies</li>
            <li>Continuous learning through real-world projects and collaboration</li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
            Education
          </h3>

          <div className="space-y-6 text-gray-300">
            <p>
              <strong>
                Bachelor of Information and Communication Technology (Hons)
              </strong>
              <br />
              Specialization: Business Intelligence
              <br />
              Uva Wellassa University of Sri Lanka
              <br />
              GPA: 3.32 / 4.00
              <br />
              <span className="text-gray-400">Nov 2023 – Present</span>
            </p>

            <p>
              <strong>GCE Advanced Level – Technology Stream</strong>
              <br />
              Gankanda Central College, Ratnapura
              <br />
              Results: 2B, 1C
              <br />
              <span className="text-gray-400">Feb 2021 – Feb 2022</span>
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
