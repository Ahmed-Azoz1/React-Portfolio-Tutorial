import { useForm , ValidationError} from '@formspree/react';
import Lottie from "lottie-react";
import './contact.css'
import doneAnimation from "../../animation/done.json";
import emailAnimation from "../../animation/email.json";

const Contact = ()=>{
    const [state, handleSubmit] = useForm("mwkgedlo");
    if (state.succeeded) {
        return <div className='flex'><Lottie loop={false} style={{height:100}} animationData={doneAnimation} /> <h2>Thanks for message!</h2></div>;
    }
    return(
        <section className="contact-us flex">
            <div className="section-left">
                <div>
                    <h1 className="title"><span className="icon icon-envelope"></span> Contact Us</h1>
                    
                </div>
                <div>
                    <p className="subtitle">Contact us for more information and Get notified when I publish someting new.</p>
                </div>
                <form onSubmit={handleSubmit} className="text-us">
                    <div className="input-group email">
                        <input autoComplete='off' required className="input-field" id="email" name="email" placeholder="Enter your Eamil" type="email" />
                        <ValidationError prefix='email' field='email' errors={state.errors}/>
                        <label htmlFor="email" className="input-label">Eamil Address:</label>
                    </div>
                    <div className="input-group message">
                        <textarea required id="message" className="input-field" name="message" placeholder="Message:"></textarea>
                        <ValidationError prefix='message' field='message' errors={state.errors}/>
                        <label className="input-label" htmlFor="message">Your message:</label>
                    </div>
                    <div>
                        <input disabled={state.submitting} className="submit" type="submit" />
                    </div>
                </form>
            </div>

            <div className="section-right">
                <Lottie style={{height:600}} animationData={emailAnimation}/>
            </div>
        </section>
    )
}

export default Contact;