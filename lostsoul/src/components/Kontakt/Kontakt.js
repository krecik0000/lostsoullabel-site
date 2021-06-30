import React from 'react';
import './Kontakt.css';
import { useForm } from "react-hook-form";

const Kontakt = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, r) => {
        const templateId = 'template_k7c7okd';
        const serviceID = 'service_sssrk9r';
        sendFeedback(serviceID, templateId, { from_name: data.name, message_html: data.comment, reply_to: data.email})
        r.target.reset();
    }
    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }


    return (
        <div className="ContactForm" id="kontakt">
            <h1 className="formTitle">Napisz do nas:</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Imię:</label>
                <input 
                    required
                    className="nameInput"
                    name="name" 
                    ref={
                        register({ 
                            required: "Please enter your name", 
                            maxLength: {
                                value: 20,
                                message: "Please enter a name with fewer than 20 characters"
                            } 
                        })
                    } 
                /><br />
                {errors.name && errors.name.message}<br />
                <label>Email:</label>
                <input
                    className="emailInput"
                    name="email"
                    ref={
                        register({
                            required: "Please enter an email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })
                    }
                /><br/>
                {errors.email && errors.email.message}<br />
                <label>Wiadomość:</label>
                <textarea 
                    className="textInput"
                    name="comment" 
                    ref={
                        register({
                            required: true
                        })
                    } 
                /><br />
                {errors.comment && "oops, you forgot your message!"}<br />

                <input type="submit" value="Wyślij!" />
            </form>
        </div>
    );
}

export default Kontakt;