import React from "react";
import FaqList from "./FaqList";

const FaqData = [
  {
    heading: "ESim FAQ",
    faqlist: [
      {
        faqQuestion: "What is an eSIM?",
        faqAnswer:
          "An eSIM (embedded SIM) is a digital SIM card built directly into your device. It allows you to activate cellular plans digitally without needing a physical SIM card.",
      },
      {
        faqQuestion: "Which devices support eSIM?",
        faqAnswer:
          "Many modern smartphones support eSIM, including recent iPhone models (iPhone XS and newer), Google Pixel phones, Samsung Galaxy devices, and select iPads.",
      },
      {
        faqQuestion: "Can I use both eSIM and physical SIM simultaneously?",
        faqAnswer:
          "An eSIM (embedded SIM) is a digital SIM card built directly into your device. It allows you to activate cellular plans digitally without needing a physical SIM card.",
      },
      {
        faqQuestion: "How do I activate an eSIM?",
        faqAnswer:
          "An eSIM (embedded SIM) is a digital SIM card built directly into your device. It allows you to activate cellular plans digitally without needing a physical SIM card.",
      },
      {
        faqQuestion: "What are the advantages of using an eSIM?",
        faqAnswer:
          "An eSIM (embedded SIM) is a digital SIM card built directly into your device. It allows you to activate cellular plans digitally without needing a physical SIM card.",
      },
    ],
  },
];

const DropDown = () => {
  const faqData = FaqData[0];

  return (
    <section className="drop-down-section">
      <div className="drop-down-wrapper">
        <div className="cus-container">
            <h1>{faqData.heading}</h1>
            <FaqList faqList={faqData.faqlist} />
        </div>
      </div>
    </section>
  );
};

export default DropDown;
