import { useRef } from "react";
import emailjs from "@emailjs/browser";
import PageWrapper from "../components/PageWrapper";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5kwfcbs",
        "template_2uq7d6o",
        form.current,
        "KL2r-1TlZucNogH97"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <PageWrapper>
      <section className="min-h-screen px-24 py-20">
        <h2 className="text-4xl font-bold mb-10">
          Contact <span className="text-yellow-400">Me</span>
        </h2>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT – CONTACT FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="input"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="input"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="input"
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-3 rounded-full
                         font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          <div className="border border-yellow-400/30 rounded-xl p-8">
  <h3 className="text-2xl font-semibold mb-6">
    Connect with <span className="text-yellow-400">Me</span>
  </h3>

  <p className="text-gray-400 mb-6">
    You can also reach me through these platforms.
  </p>

  <div className="flex gap-4">

    {/* GitHub */}
    <a
      href="https://github.com/sasi708"
      target="_blank"
      rel="noreferrer"
      className="w-14 h-14 flex items-center justify-center
                 rounded-full border border-gray-600
                 hover:border-yellow-400 hover:text-yellow-400
                 transition"
    >
      <FaGithub size={22} />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/sasindu-banuka-kumara-5062a0374/"
      target="_blank"
      rel="noreferrer"
      className="w-14 h-14 flex items-center justify-center
                 rounded-full border border-gray-600
                 hover:border-yellow-400 hover:text-yellow-400
                 transition"
    >
      <FaLinkedinIn size={22} />
    </a>

    

  </div>
</div>

          

        </div>
      </section>
    </PageWrapper>
  );
}
