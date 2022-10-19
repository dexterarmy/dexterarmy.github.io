import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container mx-auto px-5 py-10 flex flex-wrap sm:flex-nowrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden  flex flex-row mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.014870068597!2d74.61104971146288!3d26.48746607229046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be7909d9f38a1%3A0xdeaf5364a0c2f39!2sGanpati%20Nagar%2C%20Haribhau%20Upadhyay%20Nagar%2C%20Ajmer%2C%20Rajasthan%20305004!5e0!3m2!1sen!2sin!4v1665951513042!5m2!1sen!2sin"
            width="100%"
            height="100%"
            title="map"
            frameborder="0"
            className="mr-10 rounded"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
          ></iframe>
          <div className="bg-gray-900  flex flex-col py-6 rounded shadow-md w-3/4">
            <div className="lg:w-3/4 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Ganpati nagar <br />
                Ajmer, Rajasthan(India)
              </p>
            </div>
            <div className="lg:w-3/4 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-2">
                EMAIL
              </h2>
              <a
                className="text-indigo-400 leading-relaxed"
                href="immohitsharma8@gmail.com"
              >
                immohitsharma8@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+91-8619264320</p>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-2">
                Github
              </h2>
              <a
                className="text-indigo-400 leading-relaxed"
                href="https://github.com/dexterarmy"
              >
                https://github.com/dexterarmy
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-2">
                Linkedin
              </h2>
              <a
                className="text-indigo-400 leading-relaxed"
                href="https://www.linkedin.com/in/mohit-sharma-094517249/"
              >
                https://www.linkedin.com/in/mohit-sharma-094517249/
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
