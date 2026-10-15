import React, { useState } from "react";

const FaqList = ({ faqList }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleFaqOpen = (index) => {
    setOpenFaqIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section className="faq-section">
      <div className="faq-wrapper">
        <div className="cus-container">
          <div className="faq-list">
            {faqList?.map((faq, index) => (
              <div
                className={`faq-qa-wrapper ${openFaqIndex === index ? "open" : ""}`}
                key={index}
              >
                <div className="faq-question" onClick={() => handleFaqOpen(index)}>
                  <h3>{faq?.faqQuestion}</h3>
                  <span className="arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 128 128"
                      xmlSpace="preserve"
                      className=""
                    >
                      <g>
                        <path
                          d="M64 88a4 4 0 0 1-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0L64 78.344l37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40A4 4 0 0 1 64 88"
                          fill="#666666"
                          opacity="1"
                          data-original="#666666"
                          className=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.faqAnswer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqList;
