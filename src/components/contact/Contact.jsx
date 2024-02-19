import React from "react";
// import { MdOutlineEmail } from "react-icons/md";
import "./contact.css";

// import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import gmailIcon from "../../assets/gmail.png";
import whatsappIcon from "../../assets/whatsapp.png";
import telegramIcon from "../../assets/telegram.png";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container ">
        <div className="contact__options">
          <article className="contact__option">
            <img
              src={gmailIcon}
              alt="Gmail Icon"
              className="contact__option-icon"
            />
            <h4>Email</h4>
            {/* <h5>krishnakrrish66@gmail.com</h5> */}
            <a href="mailto:krishnakrrish66@gmail.com">Send a mail</a>
          </article>
          <article className="contact__option">
            <img
              src={whatsappIcon}
              alt="WhatsApp Icon"
              className="contact__option-icon"
            />
            <h4>WhatsApp</h4>
            {/* <h5>+123456789</h5> */}
            <a href="https://wa.me/9182190176">Message on WhatsApp</a>
          </article>
          <article className="contact__option">
            <img
              src={telegramIcon}
              alt="Telegram Icon"
              className="contact__option-icon"
            />
            <h4>Telegram</h4>
            {/* <h5>@your_telegram_username</h5> */}
            <a href="https://t.me/krishnakrrish66">Message on Telegram</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
