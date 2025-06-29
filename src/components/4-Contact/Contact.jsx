import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contactus.json";

export default function Contact() {
  const [state, handleSubmit] = useForm("mpwprgzp");

  return (
    <section id="contact" className='contact-us'>
      <h1 className='title'>
        <span className='icon-envelope'></span>
        Contact us
      </h1>
      <p className='sub-title'>Contact us for more information and Get notified when I Publish something new.</p>
      <div style={{justifyContent: "space-between"}} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input autoComplete="off" required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{marginTop: "24px"}}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit"  disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <p className="flex" style={{fontSize: "18px", marginTop: "1.7rem"}}>
              <Lottie loop={false} style={{height: 36}} animationData={doneAnimation} />
              Thank you for contacting me!
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie className="contact-animation" style={{height: 360}} animationData={contactAnimation} />
        </div>
      </div>
    </section>
  )
}